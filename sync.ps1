# MSEL-website 동기화 스크립트
#
#   .\sync.ps1              작업 전: 원격(GitHub)의 최신 내용을 받아온다
#   .\sync.ps1 "메시지"      작업 후: 변경사항을 커밋하고 GitHub에 올린다
#
# GitHub 저장소 자체가 동기화 장치이므로, 컴퓨터마다 한 번만 clone 해두고
# 작업 시작 전 / 끝난 후에 이 스크립트를 실행하면 어느 컴퓨터에서든 같은 상태가 된다.

param([string]$Message)

$ErrorActionPreference = "Stop"
Set-Location -Path $PSScriptRoot

Write-Host "[1/3] GitHub에서 최신 내용 받는 중..." -ForegroundColor Cyan
git pull --rebase --autostash

$changes = git status --porcelain
if (-not $changes) {
  Write-Host "`n로컬 변경사항이 없습니다. 최신 상태로 맞춰졌습니다." -ForegroundColor Green
  exit 0
}

Write-Host "`n변경된 파일:" -ForegroundColor Yellow
git status --short

if (-not $Message) {
  Write-Host "`n(커밋 메시지가 없어 올리지 않았습니다. 올리려면: .\sync.ps1 `"수정 내용 설명`")" -ForegroundColor Yellow
  exit 0
}

Write-Host "`n[2/3] 커밋 중..." -ForegroundColor Cyan
git add -A
git commit -m $Message

Write-Host "[3/3] GitHub에 올리는 중..." -ForegroundColor Cyan
git push

Write-Host "`n완료. 1~2분 뒤 https://geon-tae1.github.io/MSEL-website/ 에 반영됩니다." -ForegroundColor Green
