import { useEffect, useState } from 'react'; //
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle, keyframes, ThemeProvider } from 'styled-components';

import searchIcon from "./assets/search.png";
import loginIcon from "./assets/login_icon.png";
import chiikawabanner from "./assets/chiikawa_banner3.jpg";
import chiikawabanner2 from "./assets/chiikawa_banner2.jpg";
import chiikawabanner3 from './assets/chiikawa_banner1.jpg';
import chiikawabanner4 from './assets/chiikawa_banner4.jpg';

// 페이지 컴포넌트
import LoginPage from './pages/LoginPage';
import GoodsPage from './pages/GoodsPage';
import GoodsDetailPage from './pages/GoodsDetailPage';
import AllPage from './pages/Allpage';
import NewsPage from './pages/NewsPage';
import SignupPage from './pages/SignupPage';
import FindPasswordPage from './pages/FindPasswordPage';
import ChiikawaPage from './pages/CharacterPages/ChiikawaPage';
import HachiwarePage from './pages/CharacterPages/HachiwarePage';
import UsagiPage from './pages/CharacterPages/UsagiPage';
import MomongaPage from './pages/CharacterPages/MomongaPage';
import BammanzuPage from './pages/CharacterPages/bammanzuPage';
import RotcoPage from './pages/CharacterPages/RotcoPage';
import SisaPage from './pages/CharacterPages/SisaPage';
import KaniPage from './pages/CharacterPages/KaniPage';
import PazamaPage from './pages/CharacterPages/PazamaPage';

// 공통 컴포넌트
import PlainButton from './components/PlainButton';
import SearchBar from './components/SearchBar';
import CharacterCard from './components/CharacterCard';

import characters from './data/characters';
import { lightTheme, darkTheme } from './theme';

const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'OngleipParkDahyeon';
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2411-3@1.0/Ownglyph_ParkDaHyun.woff2') format('woff2');
      font-weight: normal;
      font-display: swap;
    }
    @font-face {
      font-family: 'Pretendard';
      src: url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/woff2/Pretendard-Regular.woff2') format('woff2');
      font-weight: 400;
      font-display: swap;
    }
    body, html, #root {
      margin: 0;
      padding: 0;
      width: 100%;
      min-height: 100%;
      background-color: ${p => p.theme.bg};
      transition: background-color 0.3s;
    }
  `;

// styled-components (레이아웃)

const Container = styled.div`
    display: flex;
    width: 100%;
    min-height: 100vh;
    padding-top: 70px;
    flex-direction: column;
    box-sizing: border-box;
    background-color: ${p => p.theme.bg};
    transition: background-color 0.3s; /* 다크 테마 <-> 라이트테마 바뀔때 0.3초에 걸쳐 천천히 바뀌게 해줌 */
  `;

// position: fixed로 항상 상단에 고정
const Header = styled.header`
    display: flex;
    font-family: 'OngleipParkDahyeon';
    position: fixed;
    width: 100%;
    height: 70px;
    top: 0;
    left: 0;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${p => p.theme.rowBorder}; /* 구분선 색상 = rowBorder */
    background-color: ${p => p.theme.header};
    z-index: 9999;
    box-sizing: border-box;
    padding: 0 40px;
    transition: background-color 0.3s, border-color 0.3s;
  `;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${p => p.theme.text};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;
  `;

// 헤더 왼쪽: 로고 + 메뉴
const LeftArea = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    flex: 1;

    .logo {
      font-size: 28px;
      font-weight: bold;
      padding: 0;
    }

    .menu-links {
      display: flex;
      gap: 15px;

      a {
        font-size: 18px;
        padding: 6px 14px;
        text-decoration: none;
        color: ${p => p.theme.text};
        &:hover {
          background-color: ${p => p.theme.rowBorder};
          border-radius: 30px;
        }
      }
    }
  `;

// 헤더 가운데: 검색창
const CenterArea = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1.5;
    white-space: nowrap;
  `;

// 헤더 오른쪽: 테마모드 버튼 + 로그인 버튼
const RightArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 4px;
  `;

const DarkModeBtn = styled.button`
    width: 46px;
    height: 46px;
    border-radius: 50%;
    border: none;
    background: transparent;
    font-size: 22px;
    color: ${p => p.theme.text};
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;

    &:hover {
      background-color: ${p => p.theme.rowBorder}; /* 구분선 컬러로 그림자 */
    }
  `;

const LoginBtn = styled(Link)`
    width: 55px;
    height: 55px;
    padding: 0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.2s;

    &:hover {
      background-color: ${p => p.theme.rowBorder}; /* 구분선 컬러로 그림자 */
    }
  `;

// 다크모드일 때 아이콘 색상 반전 (iconFilter는 theme.js에서 정의)
const LoginImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: contain;
    filter: ${p => p.theme.iconFilter};
    transition: filter 0.3s;
  `;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    flex: 1;
  `;

const Banner = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  `;

const BannerImage = styled.section`
    width: 85%;
    max-width: 1200px;
    height: 650px;
    border-radius: 40px;
    margin-top: 30px;
    position: relative;
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 60px;
    overflow: hidden;  /* 슬라이드 이미지가 둥근 모서리 밖으로 삐져나오지 않도록 */
  `;

// 슬라이드 전체 너비 = 이미지 개수 * 100%, translateX로 현재 슬라이드로 이동
const SlideTrack = styled.div`
    display: flex;
    width: ${p => p.$count * 100}%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    transform: translateX(${p => -(p.$current * (100 / p.$count))}%);
    transition: transform 0.6s ease-in-out;
  `;

const Slide = styled.img`
    width: ${p => 100 / p.$count}%;
    height: 100%;
    object-fit: cover;
    flex-shrink: 0;
  `;

const BannerTitle = styled.h1`
    font-family: 'OngleipParkDahyeon';
    font-size: 54px;
    color: black;
    text-align: center;
    margin: 0;
    text-shadow: 2px 2px 0px white;
    position: relative;
    z-index: 1;
  `;

const BannerButton = styled.button`
    width: 150px;
    height: 55px;
    position: absolute;
    right: 40px;
    bottom: 40px;
    border: none;
    border-radius: 20px;
    background-color: #ffd1d9;
    color: black;
    font-size: 20px;
    font-family: 'OngleipParkDahyeon';
    cursor: pointer;
    transition: 0.3s;
    border: 2px solid rgba(255, 185, 185, 0.5);
    z-index: 1;

    &:hover {
      background-color: #fdc4cd;
      transform: translateY(-3px);
    }
  `;

const Nav = styled.nav`
    width: 85%;
    max-width: 1200px;
    margin: 40px auto 0;
    display: flex;
    justify-content: center;
  `;

const NavText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  `;

const Introduce = styled.span`
    font-family: 'OngleipParkDahyeon';
    font-size: 40px;
    color: ${p => p.theme.text};
  `;

const CardList = styled.div`
    display: flex;
    justify-content: center;
    gap: 25px;
    flex-wrap: wrap;
    width: 85%;
    max-width: 1200px;
    padding: 30px 0 60px;
    box-sizing: border-box;
  `;

const PageContent = styled.div`  /* 푸터 아래 잘리지 않도록 */
    flex: 1;
    display: flex;
    flex-direction: column;
  `;

const Footer = styled.footer`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 40px;
    height: 80px;
    width: 100%;
    background-color: ${p => p.theme.footer};
    border-top: 1px solid ${p => p.theme.rowBorder};
    font-family: 'OngleipParkDahyeon';
    transition: background-color 0.3s;

    a {
      text-decoration: none;
      color: ${p => p.theme.subText};
      font-size: 18px;
      transition: 0.2s;

      &:hover {
        color: ${p => p.theme.text};
      }
    }
  `;

const banners = [chiikawabanner, chiikawabanner2, chiikawabanner3, chiikawabanner4];

function MainPage() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0); // 현재 슬라이드 인덱스

  // 자동 슬라이드 전환
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(view => (view + 1) % banners.length);
    }, 3000);
    return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  return (

    <Content>
      <Banner>
        <BannerImage>
          <SlideTrack $count={banners.length} $current={current}>
            {banners.map((img, i) => (
              <Slide key={i} src={img} $count={banners.length} />
            ))}
          </SlideTrack>
          <BannerTitle><b>치이카와 친구들 보러가기!</b></BannerTitle>
          <BannerButton onClick={() => navigate('/all')}>보러가기 ➔</BannerButton>
        </BannerImage>
      </Banner>

      <Nav>
        <NavText>
          <Introduce>캐릭터 소개</Introduce>
          <PlainButton name="전체 보기" onClick={() => navigate('/all')} />
        </NavText>
      </Nav>

      {/* characters 배열 순회하며 캐릭터 카드 렌더링 */}
      <CardList>
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            path={character.path}
            image={character.image}
            name={character.name}
            description={character.description}
          />
        ))}
      </CardList>
    </Content>
  );
}

// App 컴포넌트

function App() {
  // 로컬스토리지에서 이전 테마 설정 불러오기 (기본값: 라이트)
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');

  const toggleTheme = () => {
    setIsDark(prev => {
      const next = !prev;
      localStorage.setItem('theme', next ? 'dark' : 'light'); // 테마 설정 저장
      return next;
    });
  };

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Container>
          <Header>
            <LeftArea>
              <StyledLink to="/" className="logo">치이카와</StyledLink>
              <div className="menu-links">
                <Link to="/all">캐릭터</Link>
                <Link to="/goods">굿즈</Link>
                <Link to="/news">소식</Link>
              </div>
            </LeftArea>

            <CenterArea>
              <SearchBar />
            </CenterArea>

            <RightArea>
              <DarkModeBtn onClick={toggleTheme}>
                {isDark ? '✺' : '☾'}
              </DarkModeBtn>
              <LoginBtn to="/login">
                <LoginImage src={loginIcon} alt="로그인" />
              </LoginBtn>
            </RightArea>
          </Header>

          <PageContent>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/all" element={<AllPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/find-password" element={<FindPasswordPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/goods" element={<GoodsPage />} />
              <Route path="/goods/:id" element={<GoodsDetailPage />} />
              <Route path="/character/chiikawa" element={<ChiikawaPage />} />
              <Route path="/character/hachiware" element={<HachiwarePage />} />
              <Route path="/character/usagi" element={<UsagiPage />} />
              <Route path="/character/momonga" element={<MomongaPage />} />
              <Route path="/character/bammanzu" element={<BammanzuPage />} />
              <Route path="/character/rotco" element={<RotcoPage />} />
              <Route path="/character/sisa" element={<SisaPage />} />
              <Route path="/character/kani" element={<KaniPage />} />
              <Route path="/character/pazama" element={<PazamaPage />} />
            </Routes>
          </PageContent>

          <Footer>
            <Link to="/">치이카와</Link>
            <Link to="/all">캐릭터</Link>
            <Link to="/goods">굿즈</Link>
            <Link to="/news">소식</Link>
          </Footer>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
