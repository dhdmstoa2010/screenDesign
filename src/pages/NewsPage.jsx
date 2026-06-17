import styled from 'styled-components';

const newsList = [
    {
        id: 1,
        tag: "콜라보",
        date: "2026.05.25",
        title: "먼작귀 & LG TWINS 콜라보",
        description: "프로야구단 LG 트윈스와 먼작귀가 콜라보했습니다!",
        link: "https://www.ggilbo.com/news/articleView.html?idxno=1149195",
    },
    {
        id: 2,
        tag: "공지",
        date: "2025.1.30",
        title: "치이카와샵 한국 첫 정규 매장 오픈 COMING SOON",
        description: "치이카와 첫 정규 매장이 오픈됩니다!",
        link: "https://www.thetrippick.com/news/articleView.html?idxno=2700",
    },
    {
        id: 3,
        tag: "공지",
        date: "2025.11.26",
        title: "극장판 치이키와:인어섬의 비밀 개봉",
        description: "치이카와 극장판 애니메이션 개봉!",
        link: "https://www.eyesmag.com/posts/163054/chiikawachiikawa",
    },
];

function NewsPage() {
    return (
        <PageWrapper>
            <Title>소식</Title>
            <SubTitle>치이카와의 최신 소식을 확인해보세요</SubTitle>

            {/* 소식 목록 순회하며 카드 렌더링 */}
            <NewsList>
                {newsList.map((news) => (
                    <NewsCard key={news.id} onClick={() => news.link && window.open(news.link, '_blank')}>
                        <CardTop>
                            <Tag>{news.tag}</Tag>
                            <NewsDate>{news.date}</NewsDate>
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
    color: ${p => p.theme.text};
`;

const SubTitle = styled.p`
    font-family: 'Pretendard', sans-serif;
    font-size: 16px;
    color: ${p => p.theme.mutedText};
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
    background-color: ${p => p.theme.card};
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

const NewsDate = styled.span`
    font-family: 'Pretendard', sans-serif;
    font-size: 13px;
    color: ${p => p.theme.mutedText};
`;

const NewsTitle = styled.h3`
    font-family: 'OngleipParkDahyeon';
    font-size: 22px;
    margin: 0 0 10px;
    color: ${p => p.theme.text};
`;

const NewsDesc = styled.p`
    font-family: 'Pretendard', sans-serif;
    font-size: 15px;
    color: ${p => p.theme.subText};
    line-height: 1.7;
    margin: 0;
`;
