#!/usr/bin/env python3
"""
TOEIC 단어 자동 생성 및 app.js 적용 스크립트
사용법: python generate_words.py [생성할 단어 수, 기본값 50]
"""
import os
import sys
import re
import json
import subprocess
import anthropic

# 생성할 단어 수 (인수로 조정 가능)
COUNT = int(sys.argv[1]) if len(sys.argv) > 1 else 50

APP_JS = "app.js"

def build_prompt(n, exclude_str):
    return f"""토익(TOEIC) 900점 목표 영단어 {n}개를 생성해주세요.

규칙:
- 비즈니스/직장/Part5~6 고난도 어휘 위주
- 흔한 단어(accept, agree, help 등) 제외, 중급 이상
- JSON 배열 형식으로만 출력, 코드블록(```)이나 다른 설명 없이
- 형식: [{{"w":"단어","p":"품사","m":"한국어뜻","e":"English example sentence.","et":"한국어 해석"}}]
- 품사: v. adj. n. adv. 등
- 한국어 뜻: 간결하게 (최대 20자)
- 예문: 토익 실전 느낌의 비즈니스 문장 (10~15단어)
- 예문 해석: 자연스러운 한국어
- 아래 이미 있는 단어는 제외하세요:
{exclude_str}

예시:
[{{"w":"allocate","p":"v.","m":"배분하다, 할당하다","e":"The manager allocated the budget across all departments.","et":"관리자는 예산을 모든 부서에 배분했다."}}]"""


def load_existing_words():
    """app.js에서 기존 단어 목록 추출"""
    with open(APP_JS, "r", encoding="utf-8") as f:
        content = f.read()

    # WORDS 배열 추출
    match = re.search(r"const WORDS = \[(.*?)\];", content, re.DOTALL)
    if not match:
        print("오류: app.js에서 WORDS 배열을 찾을 수 없습니다.")
        sys.exit(1)

    words_str = "[" + match.group(1) + "]"
    # 작은따옴표를 큰따옴표로 변환 (JSON 파싱용)
    words_str = re.sub(r'\{w:"([^"]+)",p:"([^"]+)",m:"([^"]+)"(?:,e:"([^"]*)",et:"([^"]*)")?\}',
                       lambda m: json.dumps({"w":m.group(1),"p":m.group(2),"m":m.group(3),**({"e":m.group(4),"et":m.group(5)} if m.group(4) else {})}), words_str)
    try:
        return json.loads(words_str)
    except Exception:
        # 파싱 실패 시 단어 키만 regex로 추출
        return [{"w": w} for w in re.findall(r'\{w:"([^"]+)"', match.group(1))]


BATCH = 20  # 한 번에 생성할 단어 수 (max_tokens 초과 방지)


def generate_words(existing):
    """Claude API로 새 단어 생성 (배치로 나눠서)"""
    print(f"Claude API로 TOEIC 단어 {COUNT}개 생성 중...")
    # ANTHROPIC_AUTH_TOKEN / BASE_URL 이 SDK 인증을 가로채지 않도록 제거
    os.environ.pop("ANTHROPIC_AUTH_TOKEN", None)
    os.environ.pop("ANTHROPIC_BASE_URL", None)
    api_key = os.environ.get("ANTHROPIC_API_KEY", "").strip()
    client = anthropic.Anthropic(
        api_key=api_key,
        auth_token=None,
        base_url="https://api.anthropic.com",
    )

    exclude = sorted({w["w"].lower() for w in existing})
    new_words = []
    seen = set(exclude)

    remaining = COUNT
    attempts = 0
    while remaining > 0 and attempts < 20:
        attempts += 1
        n = min(BATCH, remaining)
        exclude_str = ", ".join(sorted(seen))
        prompt = build_prompt(n, exclude_str)

        response = client.messages.create(
            model="claude-haiku-4-5",
            max_tokens=4096,
            messages=[{"role": "user", "content": prompt}],
        )
        text = response.content[0].text.strip()
        match = re.search(r"\[.*\]", text, re.DOTALL)
        if not match:
            print(f"  배치 {attempts}: JSON 배열을 찾을 수 없음, 재시도")
            continue
        try:
            batch_words = json.loads(match.group(0))
        except json.JSONDecodeError:
            print(f"  배치 {attempts}: JSON 파싱 실패, 재시도")
            continue

        added_this = 0
        for w in batch_words:
            key = w.get("w", "").lower()
            if key and key not in seen:
                seen.add(key)
                new_words.append(w)
                added_this += 1
                remaining -= 1
                if remaining <= 0:
                    break
        print(f"  생성 진행: {len(new_words)}/{COUNT}")

    print(f"생성된 단어: {len(new_words)}개")
    return new_words


def merge_words(existing, new_words):
    """기존 단어와 새 단어 병합 (중복 제거)"""
    existing_set = {w["w"].lower() for w in existing}
    added = []
    for w in new_words:
        if w.get("w", "").lower() not in existing_set:
            existing_set.add(w["w"].lower())
            added.append(w)
    return existing + added, added


def format_words_js(words):
    """단어 목록을 app.js WORDS 배열 형식으로 변환"""
    lines = []
    chunk = []
    for i, w in enumerate(words):
        # 작은따옴표 포함 시 이스케이프
        word = w["w"].replace("'", "\\'")
        pos = w["p"].replace("'", "\\'")
        meaning = w["m"].replace("'", "\\'")
        entry = f'{{w:"{word}",p:"{pos}",m:"{meaning}"'
        if w.get("e") and w.get("et"):
            ex = w["e"].replace('"', '\\"')
            ext = w["et"].replace('"', '\\"')
            entry += f',e:"{ex}",et:"{ext}"'
        entry += "}"
        chunk.append(entry)
        if len(chunk) == 10 or i == len(words) - 1:
            lines.append("  " + ",".join(chunk))
            chunk = []
    return "const WORDS = [\n" + ",\n".join(lines) + "\n];"


def update_app_js(words_js):
    """app.js의 WORDS 배열 교체"""
    with open(APP_JS, "r", encoding="utf-8") as f:
        content = f.read()

    new_content = re.sub(
        r"const WORDS = \[.*?\];",
        words_js,
        content,
        flags=re.DOTALL,
    )

    with open(APP_JS, "w", encoding="utf-8") as f:
        f.write(new_content)


def git_push(added_count, total_count):
    """git commit & push"""
    try:
        subprocess.run(["git", "add", APP_JS], check=True, cwd=".")
        msg = f"feat: TOEIC 단어 {added_count}개 추가 (총 {total_count}개)"
        subprocess.run(["git", "commit", "-m", msg], check=True, cwd=".")
        subprocess.run(["git", "push"], check=True, cwd=".")
        print("GitHub 푸시 완료!")
    except subprocess.CalledProcessError as e:
        print(f"git 오류 (무시): {e}")


def main():
    import os
    os.chdir(r"E:\dev\toeic_vocab")

    # 1. 기존 단어 로드
    existing = load_existing_words()
    print(f"기존 단어: {len(existing)}개")

    # 2. 새 단어 생성
    new_words = generate_words(existing)

    # 3. 병합
    merged, added = merge_words(existing, new_words)
    print(f"새로 추가: {len(added)}개 / 총 단어: {len(merged)}개")

    if not added:
        print("추가할 새 단어가 없습니다.")
        return

    # 4. app.js 업데이트
    words_js = format_words_js(merged)
    update_app_js(words_js)
    print(f"app.js 업데이트 완료!")

    # 5. git push (선택)
    answer = input("GitHub에 자동 push할까요? (y/N): ").strip().lower()
    if answer == "y":
        git_push(len(added), len(merged))

    print("완료!")


if __name__ == "__main__":
    main()
