import styled from 'styled-components';
import { Link } from 'react-router-dom';
import characters from '../data/characters';


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
    color: #888;
    margin: 0 0 50px;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 28px;
    width: 100%;
    max-width: 1200px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 700px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const Card = styled(Link)`
    text-decoration: none;
    color: ${p => p.theme.text};
    background-color: ${p => p.theme.card};
    border-radius: 20px;
    padding: 24px;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    transition: 0.3s;

    &:hover {
        transform: translateY(-6px);
        box-shadow: 0 10px 28px rgba(0,0,0,0.1);
    }
`;

const CardImage = styled.img`
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 14px;
`;

const CardName = styled.h3`
    font-family: 'OngleipParkDahyeon';
    font-size: 24px;
    margin: 14px 0 8px;
`;

const CardDesc = styled.p`
    font-family: 'Pretendard', sans-serif;
    font-size: 14px;
    color: ${p => p.theme.subText};
    line-height: 1.6;
    margin: 0;
    white-space: pre-line;
`;


function AllPage() {
    return (
        <PageWrapper>
            <Title>캐릭터 소개</Title>

            <Grid>
                {characters.map((character) => (
                    <Card key={character.id} to={character.path}>
                        <CardImage src={character.image} alt={character.name} />
                        <CardName>{character.name}</CardName>
                        <CardDesc>{character.description}</CardDesc>
                    </Card>
                ))}
            </Grid>
        </PageWrapper>
    );
}

export default AllPage;
