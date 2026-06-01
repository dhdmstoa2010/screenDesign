import styled from 'styled-components';

const newsList = [
    {
        id: 1,
        tag: "업데이트",
        date: "2025.05.25",
        title: "치이카와 신규 굿즈 출시 안내",
        description: "수감 치이카와 미니 마스코트 등 신규 굿즈가 출시되었습니다. 굿즈샵에서 확인해보세요!",
    },
    {
        id: 2,
        tag: "이벤트",
        date: "2025.05.10",
        title: "치이카와 팝업스토어 오픈",
        description: "서울 홍대에서 치이카와 팝업스토어가 오픈합니다. 한정 굿즈와 포토존을 만나보세요.",
    },
    {
        id: 3,
        tag: "공지",
        date: "2025.04.28",
        title: "치이카와 시즌 2 방영 예정",
        description: "치이카와 애니메이션 시즌 2가 오는 여름 방영 예정입니다. 많은 관심 부탁드립니다!",
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
