import { useState } from 'react';
// 1. 라우터 & 스타일드 컴포넌트 임포트
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

// 이미지 임포트
import searchIcon from "./assets/search.png";
import loginIcon from "./assets/login_icon.png";
import chiikawabanner from "./assets/chiikawa_banner3.jpg";

// 페이지 임포트
import LoginPage from './pages/LoginPage';
import GoodsPage from './pages/GoodsPage';
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

// 컴포넌트 임포트
import PlainButton from './components/PlainButton';
import SearchBar from './components/SearchBar';
import CharacterCard from './components/CharacterCard';

// 데이터 임포트
import characters from './data/characters';

// ==========================================
// 글로벌 스타일 & 애니메이션 설정
// ==========================================
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
    background-color: #FCF8F8;
  }
`;

const slideUpFade = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// ==========================================
// Styled Compoennts 
// ==========================================
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-top: 70px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

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
  border-bottom: 1px solid #ddd;
  background-color: #FCF8F8;
  z-index: 9999; 
  box-sizing: border-box;
  padding: 0 40px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s;
`;

// ============== 헤더 ================= 

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
      color: black;
      &:hover {
        background-color: #e9e9e9;
        border-radius: 30px;
      }
    }
  }
`;

const CenterArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1.5; 
  white-space: nowrap; 
`;

const SearchBox = styled.div`
  width: 100%;
  max-width: 400px; 
  height: 42px;
  background-color: #f9e8e8;
  border-radius: 25px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  border: 1px solid #d9d9d9;
  display: flex;
  align-items: center;
  padding: 0 15px;
  gap: 8px;
  transition: 0.3s;

  &:hover {
    background-color: #fdd0d0;
  }
`;

const SearchIcon = styled.img`
  width: 22px; 
  height: 22px;
`;

const SearchInput = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: black;
  font-size: 15px;
  font-family: 'Pretendard', sans-serif;
`;

const RightArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
    background-color: #dbdbdb;
  }
`;

const LoginImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
`;

// ============ 배너 ==============
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
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;   
  align-items: center;
  padding-top: 60px;  
  position: relative;
  box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  animation: ${slideUpFade} 0.8s ease-out; 
  box-sizing: border-box;
`;

const BannerTitle = styled.h1`
  font-family: 'OngleipParkDahyeon';
  font-size: 54px; 
  color: black;
  text-align: center;
  margin: 0;   
  text-shadow: 2px 2px 0px white; 
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

  &:hover {
    background-color: #fdc4cd;
    transform: translateY(-3px);
  }
`;

// ======== 네비 ==========
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
  color: black;
`;

// ======== 캐릭터 카드 ===========

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


const Footer = styled.footer`
  display: flex;
  flex-direction: row; 
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: 80px; 
  width: 100%;
  background-color: #F9DFDF;
  border-top: 1px solid #eee;
  font-family: 'OngleipParkDahyeon';

  a {
    text-decoration: none;
    color: #666;
    font-size: 18px;
    transition: 0.2s;

    &:hover {
      color: black;
    }
  }
`;

// ==========================================
//  페이지 컴포넌트
// ==========================================

// 메인 컴포넌트
function MainPage() {
  const navigate = useNavigate();
  return (
    // 배너
    <Content>
      <Banner>
        <BannerImage bg={chiikawabanner}>
          <BannerTitle><b>치이카와 친구들을 만나보세요!</b></BannerTitle>
          <BannerButton onClick={() => navigate('/all')}>보러가기 ➔</BannerButton>
        </BannerImage>
      </Banner>

      {/* 네비 */}
      <Nav>
        <NavText>
          <Introduce>캐릭터 소개</Introduce>
          <PlainButton name="전체 보기" onClick={() => navigate('/all')} />
        </NavText>
      </Nav>

      {/* 카드 클릭하면 캐릭터 소개 페이지로 이동 */}
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

// ==========================================
// 메인 App 컴포넌트
// ==========================================
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Container>

        {/* 상단 헤더 영역 */}
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
            <LoginBtn to="/login">
              <LoginImage src={loginIcon} alt="로그인" />
            </LoginBtn>
          </RightArea>
        </Header>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/all" element={<AllPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/find-password" element={<FindPasswordPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/goods" element={<GoodsPage />} />
          <Route path="/character/chiikawa" element={<ChiikawaPage />} />
          <Route path="/character/hachiware" element={<HachiwarePage />} />
          <Route path="/character/usagi" element={<UsagiPage />} />
          <Route path="/character/momonga" element={<MomongaPage />} />
          <Route path="/character/bammanzu" element={<BammanzuPage />} />
          <Route path="/character/rotco" element={<RotcoPage />} />
          <Route path="/character/sisa" element={<SisaPage />} />
          <Route path="/character/kani" element={<KaniPage />} />
        </Routes>

        {/* 하단 푸터 영역 */}
        <Footer>
          <Link to="/">치이카와</Link>
          <Link to="/all">캐릭터</Link>
          <Link to="/goods">굿즈</Link>
          <Link to="/news">소식</Link>
        </Footer>

      </Container>
    </Router>
  );
}

export default App;