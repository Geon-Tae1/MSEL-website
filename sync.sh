#!/usr/bin/env bash
# MSEL-website 동기화 스크립트 (Git Bash / macOS / Linux)
#   ./sync.sh            작업 전: GitHub의 최신 내용을 받아온다
#   ./sync.sh "메시지"    작업 후: 변경사항을 커밋하고 GitHub에 올린다
set -e
cd "$(dirname "$0")"

echo "[1/3] GitHub에서 최신 내용 받는 중..."
git pull --rebase --autostash

if [ -z "$(git status --porcelain)" ]; then
  echo "로컬 변경사항이 없습니다. 최신 상태로 맞춰졌습니다."; exit 0
fi

echo; echo "변경된 파일:"; git status --short

if [ -z "$1" ]; then
  echo; echo '(커밋 메시지가 없어 올리지 않았습니다. 올리려면: ./sync.sh "수정 내용 설명")'; exit 0
fi

echo; echo "[2/3] 커밋 중..."; git add -A; git commit -m "$1"
echo "[3/3] GitHub에 올리는 중..."; git push
echo; echo "완료. 1~2분 뒤 https://geon-tae1.github.io/MSEL-website/ 에 반영됩니다."
