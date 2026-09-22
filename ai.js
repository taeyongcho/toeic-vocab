// ===== AI 설정 & 호출 (브라우저에서 각자 키로 직접 호출) =====

const AI_CFG_KEY = 'toeic_ai_cfg';

function getAICfg() {
  try { return JSON.parse(localStorage.getItem(AI_CFG_KEY)) || {}; }
  catch { return {}; }
}
function saveAICfg(cfg) {
  localStorage.setItem(AI_CFG_KEY, JSON.stringify(cfg));
}
function hasAIKey() {
  const c = getAICfg();
  return !!(c.key && c.provider);
}

// 모델 기본값
const AI_MODELS = {
  anthropic: 'claude-haiku-4-5',
  github: 'openai/gpt-4o-mini',
};

// 공통 호출: system + user 프롬프트 → 텍스트 반환
async function callAI(userPrompt, maxTokens = 1200) {
  const cfg = getAICfg();
  if (!cfg.key || !cfg.provider) throw new Error('API 키가 설정되지 않았습니다. ⚙️ 설정에서 입력하세요.');

  if (cfg.provider === 'anthropic') {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': cfg.key,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: cfg.model || AI_MODELS.anthropic,
        max_tokens: maxTokens,
        messages: [{ role: 'user', content: userPrompt }],
      }),
    });
    if (!res.ok) throw new Error('Anthropic 오류 ' + res.status + ': ' + (await res.text()).slice(0, 200));
    const data = await res.json();
    return data.content.map(b => b.text || '').join('');
  } else {
    // GitHub Models (OpenAI 호환)
    const res = await fetch('https://models.github.ai/inference/chat/completions', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': 'Bearer ' + cfg.key,
      },
      body: JSON.stringify({
        model: cfg.model || AI_MODELS.github,
        max_tokens: maxTokens,
        messages: [{ role: 'user', content: userPrompt }],
      }),
    });
    if (!res.ok) throw new Error('GitHub Models 오류 ' + res.status + ': ' + (await res.text()).slice(0, 200));
    const data = await res.json();
    return data.choices[0].message.content;
  }
}

function extractJSON(text) {
  const m = text.match(/[\[{][\s\S]*[\]}]/);
  if (!m) return null;
  try { return JSON.parse(m[0]); } catch { return null; }
}

// ===== 기능 1: 암기 도우미 =====
async function aiTip(word) {
  const prompt = `토익 단어 "${word.w}" (${word.p}, 뜻: ${word.m})를 잘 외우도록 도와주세요.
다음을 간결한 한국어 JSON으로:
{"origin":"어원/구성 (접두사+어근 등, 1~2줄)","memory":"연상 암기법 (재미있게, 1~2줄)","confuse":"혼동하기 쉬운 단어와 구별법 (없으면 빈 문자열)"}
JSON만 출력.`;
  const text = await callAI(prompt, 600);
  return extractJSON(text) || { origin: '', memory: text, confuse: '' };
}

// ===== 기능 3: Part5 문법 문제 생성 =====
async function aiGrammar(targetWords, n) {
  const prompt = `토익 Part5(단문 빈칸) 문제 ${n}개를 만들어주세요.
아래 단어들을 정답으로 활용하되, 어형변화/품사자리/전치사/접속사 등 문법 포인트를 섞으세요:
${JSON.stringify(targetWords)}

각 문제는 한국어가 아닌 영어 문장, 빈칸은 "____"로 표시.
JSON 배열로:
[{"q":"영어 문장에 ____ 포함","choices":["A","B","C","D"],"answer":"정답(choices 중 하나와 정확히 일치)","point":"문법 포인트(한국어 한 줄)","trans":"문장 한국어 해석"}]
choices는 4개, 그럴듯한 오답 포함. JSON만 출력.`;
  const text = await callAI(prompt, 2500);
  const arr = extractJSON(text);
  return Array.isArray(arr) ? arr : [];
}

// ===== 기능 4: Part2 질의응답(LC) 문제 생성 =====
async function aiPart2(n) {
  const prompt = `토익 LC Part2(질의응답) 문제 ${n}개를 만들어주세요.

규칙:
- 질문(또는 평서문) 1개 + 응답 3개(A,B,C). 정답 1개, 오답 2개.
- 실제 토익처럼 비즈니스/사무 상황 (회의, 일정, 배송, 출장, 사무기기, 인사 등)
- 오답은 전형적 함정: 유사발음, 의문사에 안 맞는 응답(When인데 장소 답), 의문사 의문문에 Yes/No 응답, 연상어휘
- 구어체로 짧게 — 질문 8~14단어, 응답 3~10단어
- 유형 다양하게: When/Where/Who/Why/How/What 의문사, 일반의문문, 부정의문문, 선택의문문, 평서문, 부가의문문

JSON 배열로만 출력:
[{"q":"영어 질문","choices":["응답A","응답B","응답C"],"answer":0,"qTrans":"질문 한국어 해석","cTrans":["A 해석","B 해석","C 해석"],"type":"유형(예: When 의문문)","point":"정답 근거와 오답 함정 설명(한국어 1~2줄)"}]

answer는 정답 인덱스 숫자(0,1,2). 정답 위치는 골고루 섞으세요. JSON만 출력.`;
  const text = await callAI(prompt, 3000);
  const arr = extractJSON(text);
  return Array.isArray(arr) ? arr : [];
}

// ===== 기능 2: 오답 분석 + 맞춤 추천 =====
async function aiAnalyze(wrongList, pool) {
  const poolWords = pool.map(w => w.w);
  const prompt = `당신은 토익 단어 과외선생님입니다. 학생의 오답 단어를 분석하세요.

오답 단어(틀린횟수 포함):
${JSON.stringify(wrongList)}

추천 후보 단어 풀(여기서만 추천):
${JSON.stringify(poolWords)}

한국어 JSON으로:
{"summary":"약점 진단 2~3문장 (품사/유형/주제)","weaknesses":["약점 키워드 3~4개"],"advice":"학습 조언 1~2문장","recommend":["집중 복습 단어 10개 (풀에서만, 오답단어 우선)"]}
JSON만 출력.`;
  const text = await callAI(prompt, 1500);
  return extractJSON(text) || { summary: text, weaknesses: [], advice: '', recommend: [] };
}
