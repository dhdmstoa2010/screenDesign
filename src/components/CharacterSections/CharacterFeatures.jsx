import styled from 'styled-components';

// 캐릭터 특징 섹션
// items(특징 배열 [{title, description}])
function CharacterFeatures({ items = [] }) {
    return (
        <Section>
            <SectionTitle>특징</SectionTitle>
            <Grid>
                {items.map((item, id) => (
                    <FeatureCard key={id}>
                        <FeatureTitle>{item.title}</FeatureTitle>
                        <FeatureDesc>{item.description}</FeatureDesc>
                    </FeatureCard>
                ))}
            </Grid>
        </Section>
    );
}

export default CharacterFeatures;

// 스타일 지정

const Section = styled.section`
    width: 85%;
    max-width: 1100px;
    margin: 70px auto 0;
`;

const SectionTitle = styled.h2`
    font-family: 'OngleipParkDahyeon';
    font-size: 36px;
    margin: 0 0 30px;
    color: black;
    border-left: 6px solid #ffb6c1;
    padding-left: 16px;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const FeatureCard = styled.div`
    background-color: white;
    border-radius: 20px;
    padding: 28px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.04);
    transition: 0.3s;

    &:hover {
        box-shadow: 0 8px 24px rgba(0,0,0,0.08);
    }
`;

const FeatureTitle = styled.h3`
    font-family: 'OngleipParkDahyeon';
    font-size: 22px;
    margin: 0 0 10px;
    color: #ff9eb0;
`;

const FeatureDesc = styled.p`
    font-family: 'Pretendard', sans-serif;
    font-size: 15px;
    color: #555;
    line-height: 1.7;
    margin: 0;
    white-space: pre-line;
`;
