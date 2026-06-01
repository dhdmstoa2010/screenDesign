import styled from 'styled-components';

// 캐릭터 페이지 최상단 배너
// bg(배경이미지), name(캐릭터 이름)
function CharacterBanner({ bg, name }) {
    return (
        <BannerWrapper bg={bg}>
            <BannerContent>
                <Name>{name}</Name>
            </BannerContent>
        </BannerWrapper>
    );
}

export default CharacterBanner;

const BannerWrapper = styled.section`
    width: 100%;
    height: 500px;
    background-image: url(${(props) => props.bg}); // props로 받은 이미지 경로를 CSS background-image에 동적으로 넣는 것
    background-size: cover;
    background-position: 50% 70%;
    display: flex;
    align-items: flex-end;
    padding: 60px 80px 120px;
    box-sizing: border-box;
`;

const BannerContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const Name = styled.h1`
    font-family: 'OngleipParkDahyeon';
    font-size: 64px;
    color: black;
    margin: 0;
    text-shadow: 2px 2px 8px rgba(255, 255, 255, 0.3);
`;