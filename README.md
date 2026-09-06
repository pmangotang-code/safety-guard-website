# 안전보안관 홈페이지 — GitHub / Vercel 업로드용

HTML 23개, CSS, JavaScript, 이미지 원본을 포함한 정적 사이트입니다.

## GitHub에 올리기
1. ZIP을 압축 해제합니다.
2. GitHub 저장소에 압축 해제된 파일과 폴더를 업로드합니다.
3. index.html, package.json, vercel.json이 저장소 최상위에 위치하도록 올립니다. ZIP 파일 자체를 업로드하면 홈페이지로 배포되지 않습니다.

## Vercel에 배포하기
GitHub 저장소를 Vercel 프로젝트로 가져옵니다. vercel.json에 빌드 명령과 출력 폴더가 포함되어 있습니다.
- Framework Preset: Other
- Root Directory: 저장소 루트
- Build Command: npm run build
- Output Directory: dist
- 별도 환경 변수 또는 외부 패키지 설치가 필요하지 않습니다.

## 수정과 미리보기
- index.html 및 각 HTML: 페이지 내용
- assets/style.css: 디자인
- assets/site.js: 메뉴, 검색, 문의 입력 확인
- assets/images/: 이미지
- 로컬 미리보기: index.html을 브라우저로 엽니다.
- 빌드: Node.js가 있는 환경에서 npm run build
- reference/: 카페24 연동 참고 자료와 기존 검수 문서. 배포 출력에는 포함되지 않습니다.

## 현재 구현 범위
문의 양식은 입력 확인만 하며 서버 전송·저장을 구현하지 않았습니다. 실제 문의 접수에는 별도 연동이 필요합니다.
