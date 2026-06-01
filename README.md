# 치이카와 팬사이트

치이카와 캐릭터들을 소개하고 굿즈를 판매하는 팬사이트입니다.

---

## 기술 스택

| 항목 | 내용 |
|------|------|
| 프레임워크 | React 19 |
| 빌드 도구 | Vite |
| 라우팅 | React Router DOM v7 |
| 스타일 | Styled Components v6 |

---

## 실행 방법

```bash
npm install
npm run dev
```

---

## 폴더 구조

```
src/
├── main.jsx                         # 앱 진입점
├── App.jsx                          # 라우터, 헤더, 푸터, 메인페이지
│
├── assets/                          # 이미지 파일
│
├── data/
│   └── characters.js                # 캐릭터 공유 데이터 (이름, 이미지, 경로 등)
│
├── components/
│   ├── PlainButton.jsx              # 공통 버튼 컴포넌트
│   ├── CharacterCard.jsx            # 메인/전체보기 페이지의 캐릭터 카드
│   ├── GoodsCard.jsx                # 굿즈 카드
│   ├── SearchBar.jsx                # 검색창 (캐릭터 + 굿즈 실시간 검색)
│   └── CharacterSections/
│       ├── CharacterBanner.jsx      # 캐릭터 페이지 배너
│       ├── CharacterProfile.jsx     # 캐릭터 프로필
│       ├── CharacterFeatures.jsx    # 캐릭터 특징
│       ├── CharacterScenes.jsx      # 명장면
│       └── CharacterFriends.jsx     # 친구들
│
└── pages/
    ├── Allpage.jsx                  # 전체 캐릭터 목록
    ├── GoodsPage.jsx                # 굿즈샵 (카테고리 필터)
    ├── NewsPage.jsx                 # 소식
    ├── LoginPage.jsx                # 로그인
    ├── SignupPage.jsx               # 회원가입
    ├── FindPasswordPage.jsx         # 비밀번호 찾기
    └── CharacterPages/
        ├── ChiikawaPage.jsx         # 치이카와
        ├── HachiwarePage.jsx        # 하치와레
        ├── UsagiPage.jsx            # 우사기
        ├── MomongaPage.jsx          # 모몽가
        ├── bammanzuPage.jsx         # 쿠리만쥬
        ├── RotcoPage.jsx            # 랏코
        ├── SisaPage.jsx             # 시사
        └── KaniPage.jsx             # 카니
```

---

## 페이지 라우트

| 경로 | 페이지 |
|------|--------|
| `/` | 메인 (배너 + 캐릭터 카드) |
| `/all` | 전체 캐릭터 목록 |
| `/goods` | 굿즈샵 |
| `/news` | 소식 |
| `/login` | 로그인 |
| `/signup` | 회원가입 |
| `/find-password` | 비밀번호 찾기 |
| `/character/chiikawa` | 치이카와 소개 |
| `/character/hachiware` | 하치와레 소개 |
| `/character/usagi` | 우사기 소개 |
| `/character/momonga` | 모몽가 소개 |
| `/character/bammanzu` | 쿠리만쥬 소개 |
| `/character/rotco` | 랏코 소개 |
| `/character/sisa` | 시사 소개 |
| `/character/kani` | 카니 소개 |

---

## 주요 기능

- **캐릭터 소개** - 캐릭터 카드 클릭 시 각 캐릭터 전용 페이지로 이동. 배너, 프로필, 특징, 명장면, 친구들 섹션으로 구성
- **굿즈샵** - 인형, 문구, 의류, 악세서리 카테고리별 필터링
- **실시간 검색** - 헤더 검색창에서 캐릭터 이름/설명, 굿즈 이름으로 검색하면 드롭다운으로 결과 표시
- **소식** - 공지, 이벤트, 업데이트 소식 카드 형태로 제공
- **회원 기능** - 로그인, 회원가입, 비밀번호 찾기 페이지

