# TOEIC 단어장 (toeic-voca)

AI 토익 어휘 학습 웹앱. 순수 HTML/CSS/JS, 빌드 없음, PWA 지원.

## 구조
- `index.html` / `style.css` — UI (생동감 그린 테마, 3D 버튼)
- `app.js` — WORDS 배열(단어 데이터) + 퀴즈/대시보드/통계 로직
- `srs.js` — 간격반복(SRS) + 학습통계 엔진 (localStorage)
- `ai.js` — 브라우저에서 사용자 본인 API 키로 직접 AI 호출 (Anthropic / GitHub Models)
- `sw.js` + `manifest.webmanifest` — PWA (네트워크 우선 캐시)
- `generate_words.py [N]` — Claude API로 단어 N개 생성 → app.js 자동 반영 → push (ANTHROPIC_API_KEY 필요)
- `add_examples.py` — 기존 단어에 예문 일괄 추가 (일회성, 완료됨)

## 단어 데이터 형식
`{w:"단어", p:"품사", m:"한국어뜻", e:"영어예문", et:"예문해석"}`

## 배포
- GitHub: https://github.com/taeyongcho/toeic-vocab (main)
- 운영: https://toeic-voca.axiosoft.co.kr
- 서버(ssh axiosoft, root@115.68.226.99): 파일은 `/home/marco/toeic-voca`,
  docker 컨테이너 `security-nginx`가 `/usr/share/nginx/toeic-voca:ro`로 마운트해 서빙
- nginx 설정: `/home/marco/security-portal/nginx/nginx.conf` (server 블록), compose: 같은 폴더 docker-compose.yml
- SSL: certbot standalone (자동갱신)

### 운영 반영 (push 후)
```bash
ssh axiosoft "cd /home/marco/toeic-voca && git pull"
```
nginx 재시작 불필요. 캐시는 네트워크 우선이라 새로고침이면 반영됨.

## 주의
- `ANTHROPIC_AUTH_TOKEN`/`ANTHROPIC_BASE_URL` 환경변수가 SDK 인증을 가로챌 수 있어 python 스크립트에서 pop 처리함
- 사용자 API 키는 브라우저 localStorage에만 저장 (서버 전송 없음)
