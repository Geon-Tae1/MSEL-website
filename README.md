# Materials for Sustainable Energy Lab — 홈페이지

Prof. Geon-Tae Park (한양대 에너지공학과 · 배터리공학과) 연구실 홈페이지.
**멀티페이지 정적 사이트**입니다 — 상단 메뉴를 누르면 실제로 페이지가 바뀝니다(idealab 방식).

## 여러 대의 컴퓨터에서 작업하기

이 저장소(GitHub) 자체가 동기화 장치입니다. Dropbox 같은 별도 폴더 동기화는
쓰지 마세요 — `.git` 폴더가 두 컴퓨터에서 동시에 덮어써지면 저장소가 깨집니다.

컴퓨터마다 **한 번만**:

```
git clone https://github.com/geon-tae1/MSEL-website.git
```

그 다음부터는 항상 이 순서로:

| 시점 | 명령 (PowerShell) | 명령 (Git Bash) |
| --- | --- | --- |
| 작업 **시작 전** | `.\sync.ps1` | `./sync.sh` |
| 작업 **끝난 후** | `.\sync.ps1 "수정 내용 설명"` | `./sync.sh "수정 내용 설명"` |

`sync` 는 `git pull --rebase` → `git add -A` → `git commit` → `git push` 를 한 번에 합니다.
push 후 1~2분이면 https://geon-tae1.github.io/MSEL-website/ 에 반영됩니다.


## 페이지 구성
```
index.html         Home
advisor.html       Team ▸ Advisor (지도교수 프로필)
members.html       Team ▸ Members
alumni.html        Team ▸ Alumni
research.html      Research (What we work on — 큰 그림 블록)
publications.html  Publications (요약 + 연도별 논문)
conference.html    Conference (연도별)
lecture.html       Lecture (학부/대학원)
notice.html        Notice
labaccess.html     Lab Access Only (관계자 전용 · 암호 게이트 통과 후에만 Project 내용 노출)
activities.html    Activities (활동 사진 — 추후)
contact.html       Contact
```
상단 Team·Lab Access Only 메뉴는 마우스를 올리면 하위 항목이 펼쳐집니다.
공통 파일: `styles.css`(디자인) · `app.js`(상단메뉴/하단/테마/모바일메뉴 자동 삽입) · `data.js`(논문 데이터) · `images/`(사진).

> 상단 메뉴와 하단은 `app.js` 안의 `NAV` 목록에서 **한 번만** 정의되어 모든 페이지에 자동으로 들어갑니다.
> 메뉴 항목을 바꾸려면 `app.js` 의 `NAV` 배열만 고치면 전 페이지에 반영됩니다.

---

## 미리보기
- 파일: `index.html` 더블클릭
- 온라인(비공개, 클로드 계정 전용): https://claude.ai/code/artifact/d3f90e70-0a78-41e8-bf85-9e56542a3655
  (미리보기는 단일 파일이라 메뉴 클릭 시 화면이 전환되는 방식으로 멀티페이지를 흉내냅니다. 실제 배포본은 진짜 별도 페이지입니다.)

---

## 논문(Publications) 관리 — `data.js`
논문은 `data.js` 의 `var PAPERS = [ ... ]` **배열만** 고치면 요약·연도별 목록·배지가 자동 갱신됩니다.
- 번호 `n` 은 **1부터 연속**(1 = 가장 오래된 논문, 맨 아래). 새 논문은 큰 번호로 위에 추가.
- 필드: `n, y(연도), t(제목), j(저널), b(권·페이지 또는 "Accepted"/"Online published"),`
  `if(Impact Factor), jcr(JCR 상위 %), lead(주저자면 true), hcp("HCP"/"HCP-C"/null), rep(대표논문 true), url(논문 링크), img(대표이미지)`
- **주저자(lead)**: first·co-first·**교신저자(corresponding)** 모두 `lead:true` 로 두면 "Lead author"로 표시됩니다. 공저자는 `lead:false`.
- **논문 링크(url)** — 입력 완료: 각 PDF에서 DOI를 추출해 `url:"https://doi.org/..."` 로 넣었습니다. 제목 클릭 시 저널 페이지로 이동합니다.
- **JCR 상위 %** — 입력 완료: 제공하신 엑셀의 저널별 상위%를 전 논문에 반영(연도 변화 작아 2021년 이전도 같은 저널 값 사용). 배지·요약 구간(5%/5–10%/10–25%/25–50%)이 자동 계산됩니다.
  - **예외 4편**(`jcr:null`): 시트에 없는 저널 — #1·#4 J. Mater. Chem. A, #3 Small, #5 Adv. Funct. Mater. → 상위% 주시면 채웁니다.
- **대표이미지(논문 표지)** — 입력 완료: 각 PDF 1페이지 상단~중단(저널명·제목)을 캡처해 `images/p{n}.jpg` 로 넣었습니다. 교체하려면 같은 파일명으로 덮어쓰세요.
- under-revision / submitted 논문은 요청대로 제외했습니다.

## Research 그림 넣기 (`research.html`)
각 주제 블록의 `<div class="rfig"> ... </div>` 를
`<div class="rfig"><img src="images/research1.jpg" alt="..."></div>` 로 바꾸면 큰 그림이 들어갑니다.

## 멤버 추가 (`team.html`)
`Current members` 아래 주석의 카드 예시를 `<div class="members"> ... </div>` 로 감싸 넣으세요.

## 활동 사진 (`activities.html`)
`<div class="gcell">Photo</div>` 를 `<div class="gcell"><img src="images/act1.jpg" alt="..."></div>` 로 교체.

---

## ⚠️ Lab Access Only 페이지(관계자 전용)에 대한 중요한 안내
`labaccess.html` 은 암호 입력 게이트가 있지만, **정적 사이트의 클라이언트 암호는 "진짜 보안"이 아닙니다.**
페이지 소스를 열면 내용이 보일 수 있으므로, **정말 기밀인 과제 정보(예산·미공개 데이터 등)는 여기에 직접 넣지 마세요.**
- 현재 암호: `labaccess.html` 안 `<script>` 의 `var PASSCODE="rjsxoqkr8330";` (원하면 변경 가능).
- 지금은 공개돼도 무방한 수준의 과제 개요만 넣어두었습니다(예산/세부 목표는 비워둠).
- **진짜 비공개가 필요하면** 권장: (1) 구글드라이브/노션/원드라이브의 로그인 링크를 이 페이지에서 연결, 또는 (2) 학교 계정 인증이 걸린 별도 공간에 문서를 두고 링크만 노출. 원하시면 그 구조로 바꿔드리겠습니다.

---

## 배포 (GitHub Pages) — 본인만 수정 · 도메인 msel.hanyang.ac.kr
1. github.com 계정 생성(2FA 권장) → New repository (이름 자유, 예 `msel-website`, **Public**). 커스텀 도메인을 쓰므로 저장소 이름은 주소에 영향 없음.
2. **Add file → Upload files** 로 이 폴더 전체 업로드 후 Commit. **`CNAME`·`.nojekyll` 파일 포함**(숨김파일이라 탐색기에서 안 보이면 "숨긴 항목 표시" 켜기). README.md 는 선택.
3. Settings → Pages → Source: **Deploy from a branch**, `main` / `/(root)` → Save.
4. Settings → Pages → **Custom domain** 에 `msel.hanyang.ac.kr` 입력·Save → 검증 후 **Enforce HTTPS** 체크. (repo 안 `CNAME` 파일에 이미 같은 도메인이 들어있음.)
5. **DNS(한양대 전산팀에 요청)**: `msel.hanyang.ac.kr` 에 대해 **CNAME 레코드 → `본인깃허브아이디.github.io`** 추가 요청. (이 DNS 설정은 학교만 가능. 전파에 수십 분~수 시간.)
6. 수정 시: 파일을 고쳐 다시 Upload → Commit. **본인 계정으로만 push 가능 = 본인만 수정.** Collaborator 추가하지 않기.

## ⚠️ 배포 전 확인
- **ORCID**: CV의 `000-0002-8964-6080`(15자리)를 표준 16자리 `0000-0002-8964-6080` 로 보정해 링크했습니다. 본인 것 맞는지 클릭 확인.
- **개인정보**: 휴대폰·집주소·생년월일은 넣지 않았습니다. 연락처는 학교 이메일·**대표전화 02-2220-2408**·캠퍼스 주소.
- **특허 정보**: 요청대로 제외했습니다.

---

## v6 업데이트 (활동·지도·마스코트 등)
- **상단 메뉴 드롭다운**(Team / Lab Access Only): 마우스를 아래로 내려 클릭할 때 사라지던 문제 수정(투명 브리지 + 사라짐 지연).
- **Advisor 사진 고정**: 스크롤해도 왼쪽 사진이 화면에 고정(sticky)됩니다.
- **Members 한양이(마스코트)**: `images/mascot-hanyangi.png` 파일을 넣으면 members 페이지에 자동 표시됩니다(현재 파일이 없어 자리표시가 보임). **한양이 PNG를 이 경로에 넣어주세요.**
- **Publications JCR 막대**: 상위 5% / 5–10% / 10–25% / 25–50% 막대 색을 구간별로 다르게(네이비→스틸→틸→골드).
- **Contact 지도**: 한양대 FTC를 Google Maps 로 임베드. 배포본(GitHub Pages)에서 표시됩니다. *(claude.ai 미리보기는 보안정책상 지도 iframe이 차단되어 빈 칸으로 보일 수 있음 — 실제 사이트에서는 정상)*
- **Activities 갤러리**: `e:\activities` 사진을 `images/activities/` 로 정리해 카드형 갤러리 + 라이트박스(클릭 시 큰 사진·설명·다중사진 넘김) 구현. 설명은 각 폴더 메모를 영어로 작성.
  - 활동 추가/수정: `activities.html` 하단 인라인 스크립트의 `var ACT=[ ... ]` 배열을 편집(각 항목 `d`날짜·`t`제목·`x`설명·`g`[이미지파일들]). 이미지는 `images/activities/` 에 넣기.
