import styled from 'styled-components';

const newsList = [
    {
        id: 1,
        tag: "콜라보",
        date: "2026.05.25",
        title: "먼작귀 & LG TWINS 콜라보",
        description: "프로야구단 LG 트윈스와 먼작귀가 콜라보했습니다!",
    },
    {
        id: 2,
        tag: "이벤트",
        date: "2025.08.1",
        title: "미니소 치이카와 오픈",
        description: "서울 홍대와 강남의 미니소에서 치이카와 판매중입니다!",
    },
    {
        id: 3,
        tag: "공지",
        date: "2025.11.26",
        title: "극장판 치이키와:인어섬의 비밀 국내 방영 예정",
        description: "치이카와 극장판 애니메이션이 국내에서도 방영 예정입니다!",
    },
];

function NewsPage() {
    return (
        <PageWrapper>
            <Title>소식</Title>
            <SubTitle>치이카와의 최신 소식을 확인해보세요</SubTitle>

            <NewsList>
                {newsList.map((news) => (
                    <NewsCard key={news.id}>
                        <CardTop>
                            <Tag>{news.tag}</Tag>
                            <Date>{news.date}</Date>
                        </CardTop>
                        <NewsTitle>{news.title}</NewsTitle>
                        <NewsDesc>{news.description}</NewsDesc>
                    </NewsCard>
                ))}
            </NewsList>
        </PageWrapper>
    );
}

export default NewsPage;

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 40px 80px;
    width: 100%;
    box-sizing: border-box;
`;

const Title = styled.h1`
    font-family: 'OngleipParkDahyeon';
    font-size: 48px;
    margin: 0 0 10px;
    color: black;
`;

const SubTitle = styled.p`
    font-family: 'Pretendard', sans-serif;
    font-size: 16px;
    color: #888;
    margin: 0 0 50px;
`;

const NewsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    max-width: 800px;
`;

const NewsCard = styled.div`
    background-color: white;
    border-radius: 20px;
    padding: 28px 32px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    transition: 0.3s;
    cursor: pointer;

    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 24px rgba(0,0,0,0.09);
    }
`;

const CardTop = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 12px;
`;

const Tag = styled.span`
    background-color: #ffb6c1;
    color: white;
    font-family: 'Pretendard', sans-serif;
    font-size: 12px;
    font-weight: bold;
    padding: 4px 12px;
    border-radius: 20px;
`;

const Date = styled.span`
    font-family: 'Pretendard', sans-serif;
    font-size: 13px;
    color: #aaa;
`;

const NewsTitle = styled.h3`
    font-family: 'OngleipParkDahyeon';
    font-size: 22px;
    margin: 0 0 10px;
    color: black;
`;

const NewsDesc = styled.p`
    font-family: 'Pretendard', sans-serif;
    font-size: 15px;
    color: #555;
    line-height: 1.7;
    margin: 0;
`;
