const WORDS = [
  {w:"abandon",p:"v.",m:"버리다, 포기하다"},{w:"abide",p:"v.",m:"따르다, 지키다"},{w:"abolish",p:"v.",m:"폐지하다"},{w:"abundant",p:"adj.",m:"풍부한"},{w:"accelerate",p:"v.",m:"가속하다, 촉진하다"},{w:"accommodate",p:"v.",m:"수용하다, 제공하다"},{w:"accomplish",p:"v.",m:"성취하다, 완수하다"},{w:"accountable",p:"adj.",m:"책임이 있는"},{w:"accurate",p:"adj.",m:"정확한"},{w:"acquire",p:"v.",m:"획득하다, 습득하다"},
  {w:"adequate",p:"adj.",m:"적절한, 충분한"},{w:"adjacent",p:"adj.",m:"인접한"},{w:"administrative",p:"adj.",m:"행정의, 관리의"},{w:"advance",p:"v./n.",m:"전진하다, 발전; 진보"},{w:"adversely",p:"adv.",m:"불리하게, 역으로"},{w:"affordable",p:"adj.",m:"감당할 수 있는, 저렴한"},{w:"aggregate",p:"v./n.",m:"합산하다; 총계"},{w:"allocate",p:"v.",m:"배분하다, 할당하다"},{w:"alternative",p:"n./adj.",m:"대안; 대체적인"},{w:"amenity",p:"n.",m:"편의시설, 쾌적함"},
  {w:"analyze",p:"v.",m:"분석하다"},{w:"announce",p:"v.",m:"발표하다, 공지하다"},{w:"anticipate",p:"v.",m:"예상하다, 기대하다"},{w:"apply",p:"v.",m:"지원하다, 적용하다"},{w:"appoint",p:"v.",m:"임명하다, 지정하다"},{w:"appreciate",p:"v.",m:"감사하다, 감상하다"},{w:"approach",p:"n./v.",m:"접근법; 접근하다"},{w:"approve",p:"v.",m:"승인하다"},{w:"arrange",p:"v.",m:"준비하다, 배열하다"},{w:"assess",p:"v.",m:"평가하다, 산정하다"},
  {w:"assist",p:"v.",m:"돕다, 지원하다"},{w:"assume",p:"v.",m:"가정하다, 맡다"},{w:"assure",p:"v.",m:"확신시키다, 보증하다"},{w:"attain",p:"v.",m:"달성하다, 획득하다"},{w:"authorize",p:"v.",m:"권한을 주다, 인가하다"},{w:"available",p:"adj.",m:"이용 가능한, 구할 수 있는"},{w:"benefit",p:"n./v.",m:"이익, 혜택; 이득이 되다"},{w:"budget",p:"n./v.",m:"예산; 예산을 세우다"},{w:"candidate",p:"n.",m:"후보자, 지원자"},{w:"capacity",p:"n.",m:"수용력, 능력, 용량"},
  {w:"clarify",p:"v.",m:"명확히 하다"},{w:"collaborate",p:"v.",m:"협력하다"},{w:"compensate",p:"v.",m:"보상하다"},{w:"compete",p:"v.",m:"경쟁하다"},{w:"comply",p:"v.",m:"따르다, 준수하다"},{w:"conduct",p:"v./n.",m:"수행하다; 행동"},{w:"confirm",p:"v.",m:"확인하다"},{w:"consult",p:"v.",m:"상담하다, 참고하다"},{w:"contract",p:"n./v.",m:"계약서; 계약하다"},{w:"contribute",p:"v.",m:"기여하다, 공헌하다"},
  {w:"deadline",p:"n.",m:"마감 기한"},{w:"decline",p:"v./n.",m:"거절하다, 감소하다; 감소"},{w:"dedicate",p:"v.",m:"헌신하다, 바치다"},{w:"delay",p:"v./n.",m:"지연하다; 지연"},{w:"deliver",p:"v.",m:"배달하다, 전달하다"},{w:"demand",p:"n./v.",m:"수요; 요구하다"},{w:"demonstrate",p:"v.",m:"보여주다, 시연하다"},{w:"department",p:"n.",m:"부서, 학과"},{w:"designate",p:"v.",m:"지정하다, 임명하다"},{w:"determine",p:"v.",m:"결정하다, 알아내다"},
  {w:"distribute",p:"v.",m:"배포하다, 유통하다"},{w:"draft",p:"n./v.",m:"초안; 초안을 작성하다"},{w:"effective",p:"adj.",m:"효과적인, 시행 중인"},{w:"efficient",p:"adj.",m:"효율적인"},{w:"eliminate",p:"v.",m:"제거하다, 없애다"},{w:"emerge",p:"v.",m:"나타나다, 부상하다"},{w:"emphasize",p:"v.",m:"강조하다"},{w:"employ",p:"v.",m:"고용하다, 사용하다"},{w:"enhance",p:"v.",m:"향상시키다"},{w:"establish",p:"v.",m:"설립하다, 확립하다"},
  {w:"evaluate",p:"v.",m:"평가하다"},{w:"exceed",p:"v.",m:"초과하다, 능가하다"},{w:"execute",p:"v.",m:"실행하다, 수행하다"},{w:"expand",p:"v.",m:"확장하다"},{w:"expense",p:"n.",m:"비용, 경비"},{w:"facilitate",p:"v.",m:"용이하게 하다, 촉진하다"},{w:"fluctuate",p:"v.",m:"변동하다"},{w:"forecast",p:"n./v.",m:"예측, 예보; 예측하다"},{w:"fulfill",p:"v.",m:"이행하다, 충족시키다"},{w:"generate",p:"v.",m:"생성하다, 발생시키다"},
  {w:"guarantee",p:"n./v.",m:"보증; 보장하다"},{w:"implement",p:"v.",m:"시행하다, 구현하다"},{w:"improve",p:"v.",m:"개선하다, 향상시키다"},{w:"incentive",p:"n.",m:"장려책, 인센티브"},{w:"indicate",p:"v.",m:"나타내다, 표시하다"},{w:"initiate",p:"v.",m:"시작하다, 착수하다"},{w:"inspect",p:"v.",m:"검사하다, 점검하다"},{w:"integrate",p:"v.",m:"통합하다"},{w:"inventory",p:"n.",m:"재고, 목록"},{w:"invest",p:"v.",m:"투자하다"},
  {w:"maintain",p:"v.",m:"유지하다"},{w:"mandatory",p:"adj.",m:"의무적인"},{w:"negotiate",p:"v.",m:"협상하다"},{w:"obtain",p:"v.",m:"얻다, 획득하다"},{w:"optimize",p:"v.",m:"최적화하다"},{w:"outstanding",p:"adj.",m:"뛰어난, 미결의"},{w:"oversee",p:"v.",m:"감독하다"},{w:"participate",p:"v.",m:"참여하다"},{w:"postpone",p:"v.",m:"연기하다"},{w:"procedure",p:"n.",m:"절차, 과정"},
  {w:"productive",p:"adj.",m:"생산적인"},{w:"propose",p:"v.",m:"제안하다"},{w:"qualify",p:"v.",m:"자격을 갖추다"},{w:"recommend",p:"v.",m:"추천하다, 권고하다"},{w:"reduce",p:"v.",m:"줄이다, 감소시키다"},{w:"reimburse",p:"v.",m:"환급하다, 상환하다"},{w:"require",p:"v.",m:"필요로 하다, 요구하다"},{w:"resolve",p:"v.",m:"해결하다, 결심하다"},{w:"responsibility",p:"n.",m:"책임"},{w:"revenue",p:"n.",m:"수익, 수입"},
  {w:"revise",p:"v.",m:"수정하다, 개정하다"},{w:"schedule",p:"n./v.",m:"일정; 일정을 잡다"},{w:"submit",p:"v.",m:"제출하다"},{w:"supervise",p:"v.",m:"감독하다"},{w:"supply",p:"n./v.",m:"공급; 공급하다"},{w:"terminate",p:"v.",m:"종료하다, 해고하다"},{w:"transaction",p:"n.",m:"거래"},{w:"transition",p:"n./v.",m:"전환; 전환하다"},{w:"update",p:"v./n.",m:"업데이트하다; 최신 정보"},{w:"utilize",p:"v.",m:"활용하다, 이용하다"}
];

function speak(text) {
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = 'en-US';
  utter.rate = 0.9;
  speechSynthesis.cancel();
  speechSynthesis.speak(utter);
}

let quiz = { mode:'', list:[], idx:0, score:0, answered:false };
let wrongWords = JSON.parse(localStorage.getItem('toeic_wrong') || '{}');

function saveWrong(word) {
  wrongWords[word.w] = wrongWords[word.w] || {w:word.w, p:word.p, m:word.m, count:0};
  wrongWords[word.w].count++;
  localStorage.setItem('toeic_wrong', JSON.stringify(wrongWords));
  updateWrongBadge();
}

function updateWrongBadge() {
  const count = Object.keys(wrongWords).length;
  const badge = document.getElementById('wrong-badge');
  badge.textContent = count > 0 ? ` (${count})` : '';
}

function clearWrong() {
  if (!confirm('오답 노트를 모두 삭제할까요?')) return;
  wrongWords = {};
  localStorage.removeItem('toeic_wrong');
  updateWrongBadge();
  renderWrongList();
}

function switchTab(name) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav button').forEach(el => el.classList.remove('active'));
  document.getElementById('tab-'+name).classList.add('active');
  const idx = ['quiz1','quiz2','wrong'].indexOf(name);
  document.querySelectorAll('.nav button')[idx].classList.add('active');
  if (name === 'wrong') renderWrongList();
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length-1; i > 0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}

function startQuiz(mode) {
  const selectId = mode === 'q1' ? 'q1-count' : 'q2-count';
  const countVal = document.getElementById(selectId).value;
  let list = shuffle(WORDS);
  if (countVal !== 'all') list = list.slice(0, parseInt(countVal));
  quiz = { mode, list, idx:0, score:0, answered:false };
  renderQuestion();
}

function renderQuestion() {
  const area = document.getElementById(quiz.mode+'-area');
  if (quiz.idx >= quiz.list.length) { renderResult(area); return; }

  const word = quiz.list[quiz.idx];
  const pct = Math.round((quiz.idx / quiz.list.length) * 100);

  if (quiz.mode === 'q1') {
    const wrongPool = WORDS.filter(w => w.w !== word.w);
    const choices = shuffle([word, ...shuffle(wrongPool).slice(0, 3)]);

    area.innerHTML = `
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
      <div class="progress-text">${quiz.idx+1} / ${quiz.list.length}  ·  맞춤: ${quiz.score}</div>
      <div class="card">
        <div class="part-of-speech">${word.p}</div>
        <div class="word">${word.w} <button class="speak-btn" onclick="speak('${word.w}')" title="발음 듣기">🔊</button></div>
        <div class="hint">뜻을 고르세요</div>
        <div class="options">
          ${choices.map(c => `<button class="option-btn" onclick="checkQ1(this,'${c.w}','${word.w}')">${c.m}</button>`).join('')}
        </div>
        <div class="feedback" id="fb"></div>
        <button class="next-btn" id="next-btn" onclick="nextQ()">다음 →</button>
      </div>`;
  } else {
    area.innerHTML = `
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
      <div class="progress-text">${quiz.idx+1} / ${quiz.list.length}  ·  맞춤: ${quiz.score}</div>
      <div class="card">
        <div class="hint" style="font-size:1rem; color:#374151; font-weight:600; margin-bottom:4px;">${word.m}</div>
        <div class="hint">[${word.p}] 영단어를 입력하세요</div>
        <div class="type-input-wrap">
          <input class="type-input" id="type-input" placeholder="영어로 입력..." onkeydown="if(event.key==='Enter')checkQ2()">
          <button class="submit-btn" onclick="checkQ2()">확인</button>
        </div>
        <div class="feedback" id="fb"></div>
        <button class="next-btn" id="next-btn" onclick="nextQ()">다음 →</button>
      </div>`;
    setTimeout(() => document.getElementById('type-input')?.focus(), 50);
  }
}

function checkQ1(btn, chosen, correct) {
  if (quiz.answered) return;
  quiz.answered = true;
  const word = quiz.list[quiz.idx];
  const btns = btn.parentElement.querySelectorAll('.option-btn');
  btns.forEach(b => b.disabled = true);

  if (chosen === correct) {
    btn.classList.add('correct');
    quiz.score++;
    showFeedback(true, '정답!');
  } else {
    btn.classList.add('wrong');
    btns.forEach(b => { if (b.textContent === word.m) b.classList.add('correct'); });
    saveWrong(word);
    showFeedback(false, `오답 — 정답: ${word.m}`);
  }
  document.getElementById('next-btn').classList.add('show');
}

function checkQ2() {
  if (quiz.answered) return;
  const input = document.getElementById('type-input');
  if (!input) return;
  const val = input.value.trim().toLowerCase();
  if (!val) return;
  quiz.answered = true;
  input.disabled = true;
  document.querySelector('.submit-btn').disabled = true;

  const word = quiz.list[quiz.idx];
  if (val === word.w.toLowerCase()) {
    quiz.score++;
    showFeedback(true, '정답!');
  } else {
    saveWrong(word);
    showFeedback(false, `오답 — 정답: ${word.w}`);
  }
  speak(word.w);
  document.getElementById('next-btn').classList.add('show');
}

function showFeedback(ok, msg) {
  const fb = document.getElementById('fb');
  fb.textContent = ok ? '✅ ' + msg : '❌ ' + msg;
  fb.className = 'feedback show ' + (ok ? 'correct' : 'wrong');
}

function nextQ() {
  quiz.idx++;
  quiz.answered = false;
  renderQuestion();
}

function renderResult(area) {
  const pct = Math.round((quiz.score / quiz.list.length) * 100);
  const emoji = pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '📖';
  area.innerHTML = `
    <div class="result-card">
      <div style="font-size:3rem;">${emoji}</div>
      <div class="score">${quiz.score} / ${quiz.list.length}</div>
      <p>정답률 ${pct}%</p>
      <button onclick="startQuiz('${quiz.mode}')">다시 하기</button>
    </div>`;
}

function renderWrongList() {
  const list = document.getElementById('wrong-list');
  const items = Object.values(wrongWords).sort((a,b) => b.count - a.count);
  if (items.length === 0) {
    list.innerHTML = `<div class="empty-state"><div class="icon">🎯</div><div>오답 단어가 없어요!<br>퀴즈를 풀면 틀린 단어가 여기 쌓여요.</div></div>`;
    return;
  }
  list.innerHTML = items.map(it => `
    <div class="wrong-item">
      <div>
        <div class="wword">${it.w} <span style="font-size:0.75rem;color:#9ca3af;">${it.p}</span> <button class="speak-btn" onclick="speak('${it.w}')" title="발음 듣기">🔊</button></div>
        <div class="wmean">${it.m}</div>
      </div>
      <span class="wcount">틀림 ${it.count}회</span>
    </div>`).join('');
}

updateWrongBadge();
