// ===== 간격 반복 학습(SRS) + 학습 통계 엔진 =====
// 데이터는 localStorage에만 저장 (기기별)

const SRS_KEY = 'toeic_srs';
const STATS_KEY = 'toeic_stats';

// 레벨별 다음 복습까지 간격 (밀리초)
const MIN = 60 * 1000, DAY = 24 * 60 * 60 * 1000;
const SRS_INTERVALS = [10 * MIN, 1 * DAY, 2 * DAY, 4 * DAY, 7 * DAY, 15 * DAY, 30 * DAY, 60 * DAY];
const MAX_LEVEL = SRS_INTERVALS.length - 1;
const MASTERED_LEVEL = 5; // 이 레벨 이상이면 '숙달'

function getSRS() {
  try { return JSON.parse(localStorage.getItem(SRS_KEY)) || {}; }
  catch { return {}; }
}
function saveSRS(s) { localStorage.setItem(SRS_KEY, JSON.stringify(s)); }

// 정답/오답 기록 → 스케줄 갱신
function srsRecord(word, correct) {
  const s = getSRS();
  const now = Date.now();
  let e = s[word.w] || { level: 0, due: now, correct: 0, wrong: 0, seen: 0 };
  e.seen++;
  if (correct) {
    e.correct++;
    e.level = Math.min(e.level + 1, MAX_LEVEL);
  } else {
    e.wrong++;
    e.level = 0;
  }
  e.due = now + SRS_INTERVALS[e.level];
  e.last = now;
  s[word.w] = e;
  saveSRS(s);
  statsAddStudied(1);
  return e;
}

// 복습 예정(due) 단어 목록 → WORD 객체 배열
function getDueWords() {
  const s = getSRS();
  const now = Date.now();
  const due = Object.keys(s).filter(w => s[w].due <= now);
  return due
    .map(w => WORDS.find(x => x.w === w))
    .filter(Boolean)
    .sort((a, b) => s[a.w].due - s[b.w].due);
}

// 아직 학습 안 한 새 단어
function getNewWords(limit) {
  const s = getSRS();
  const fresh = WORDS.filter(w => !s[w.w]);
  return limit ? fresh.slice(0, limit) : fresh;
}

function srsSummary() {
  const s = getSRS();
  const total = WORDS.length;
  const studied = Object.keys(s).length;
  const mastered = Object.values(s).filter(e => e.level >= MASTERED_LEVEL).length;
  const due = getDueWords().length;
  return { total, studied, mastered, due, fresh: total - studied };
}

// ===== 학습 통계 / 연속 학습(streak) / 일일 목표 =====
function todayStr() {
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}
function dayDiff(a, b) {
  return Math.round((new Date(b) - new Date(a)) / DAY);
}

function getStats() {
  try {
    return Object.assign({ streak: 0, lastDate: '', goal: 20, history: {} },
      JSON.parse(localStorage.getItem(STATS_KEY)) || {});
  } catch {
    return { streak: 0, lastDate: '', goal: 20, history: {} };
  }
}
function saveStats(st) { localStorage.setItem(STATS_KEY, JSON.stringify(st)); }

function statsAddStudied(n) {
  const st = getStats();
  const today = todayStr();
  if (st.lastDate !== today) {
    // 새 날: streak 갱신
    if (st.lastDate && dayDiff(st.lastDate, today) === 1) st.streak += 1;
    else st.streak = 1;
    st.lastDate = today;
  } else if (!st.streak) {
    st.streak = 1;
  }
  st.history[today] = (st.history[today] || 0) + n;
  saveStats(st);
}

function todayCount() {
  return getStats().history[todayStr()] || 0;
}

function setGoal(g) {
  const st = getStats();
  st.goal = g;
  saveStats(st);
}

// 최근 7일 학습량 [{date, count}]
function last7days() {
  const st = getStats();
  const out = [];
  const now = new Date();
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now.getTime() - i * DAY);
    const key = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
    out.push({ date: key, label: ['일','월','화','수','목','금','토'][d.getDay()], count: st.history[key] || 0 });
  }
  return out;
}
