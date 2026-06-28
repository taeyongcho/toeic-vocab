#!/usr/bin/env python3
"""
기존 WORDS 배열 전체에 예문/해석 추가 (일회성 마이그레이션)
"""
import os, re, json
import anthropic

os.chdir(r"E:\dev\toeic_vocab")
APP_JS = "app.js"
BATCH = 20  # 한 번에 처리할 단어 수

def load_words():
    content = open(APP_JS, encoding="utf-8").read()
    match = re.search(r"const WORDS = \[(.*?)\];", content, re.DOTALL)
    raw = "[" + match.group(1) + "]"
    raw = re.sub(r'\{w:"([^"]+)",p:"([^"]+)",m:"([^"]+)"(?:,e:"[^"]*",et:"[^"]*")?\}',
                 r'{"w":"\1","p":"\2","m":"\3"}', raw)
    return json.loads(raw)

def add_examples(words_batch, client):
    word_list = json.dumps([{"w": w["w"], "p": w["p"], "m": w["m"]} for w in words_batch], ensure_ascii=False)
    prompt = f"""다음 토익 단어 목록에 각각 예문(e)과 한국어 해석(et)을 추가해서 JSON 배열로 반환해주세요.

규칙:
- 예문: 토익 비즈니스 느낌, 10~15단어
- 해석: 자연스러운 한국어
- 입력과 동일한 순서로, w/p/m/e/et 필드 포함
- JSON 배열만 출력, 다른 설명 없이

입력:
{word_list}"""

    response = client.messages.create(
        model="claude-haiku-4-5",
        max_tokens=4096,
        messages=[{"role": "user", "content": prompt}],
    )
    text = response.content[0].text.strip()
    match = re.search(r"\[.*\]", text, re.DOTALL)
    return json.loads(match.group(0))

def format_words_js(words):
    lines, chunk = [], []
    for i, w in enumerate(words):
        word = w["w"].replace('"', '\\"')
        pos  = w["p"].replace('"', '\\"')
        mean = w["m"].replace('"', '\\"')
        entry = f'{{w:"{word}",p:"{pos}",m:"{mean}"'
        if w.get("e") and w.get("et"):
            ex  = w["e"].replace('"', '\\"')
            ext = w["et"].replace('"', '\\"')
            entry += f',e:"{ex}",et:"{ext}"'
        entry += "}"
        chunk.append(entry)
        if len(chunk) == 5 or i == len(words) - 1:
            lines.append("  " + ",".join(chunk))
            chunk = []
    return "const WORDS = [\n" + ",\n".join(lines) + "\n];"

def update_app_js(words_js):
    content = open(APP_JS, encoding="utf-8").read()
    new_content = re.sub(r"const WORDS = \[.*?\];", words_js, content, flags=re.DOTALL)
    open(APP_JS, "w", encoding="utf-8").write(new_content)

def main():
    # ANTHROPIC_AUTH_TOKEN / BASE_URL 이 SDK 인증을 가로채지 않도록 제거
    os.environ.pop("ANTHROPIC_AUTH_TOKEN", None)
    os.environ.pop("ANTHROPIC_BASE_URL", None)

    api_key = os.environ.get("ANTHROPIC_API_KEY", "").strip()
    if not api_key:
        api_key = input("ANTHROPIC_API_KEY를 입력하세요: ").strip()
    print(f"사용 중인 키: {api_key[:12]}...{api_key[-4:]} (길이: {len(api_key)})")
    client = anthropic.Anthropic(
        api_key=api_key,
        auth_token=None,
        base_url="https://api.anthropic.com",
    )
    words = load_words()
    print(f"총 {len(words)}개 단어에 예문 추가 시작...")

    result = []
    for i in range(0, len(words), BATCH):
        batch = words[i:i+BATCH]
        print(f"  처리 중: {i+1}~{min(i+BATCH, len(words))}번째...")
        enriched = add_examples(batch, client)
        result.extend(enriched)
        print(f"  완료: {len(result)}/{len(words)}")

    words_js = format_words_js(result)
    update_app_js(words_js)
    print(f"\napp.js 업데이트 완료! ({len(result)}개 단어)")

if __name__ == "__main__":
    main()
