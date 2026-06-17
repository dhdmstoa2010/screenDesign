import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import characters from '../data/characters';

function CharacterPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const character = characters.find((c) => c.id === Number(id));

  return (
    <Container>
      <Card>
        <CharacterImage src={character.image} alt={character.name} />
        <Content>
          <Name>{character.name}</Name>
          <Description>{character.description}</Description>
          <BackButton onClick={() => navigate(-1)}>← 돌아가기</BackButton>
        </Content>
      </Card>
    </Container>
  );
}

export default CharacterPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 70px);
  padding: 60px 40px;
  box-sizing: border-box;
`;

const Card = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
  background-color: ${p => p.theme.card};
  border-radius: 30px;
  padding: 60px;
  max-width: 800px;
  width: 100%;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.07);
  transition: background-color 0.3s;
`;

const CharacterImage = styled.img`
  width: 260px;
  height: 260px;
  object-fit: cover;
  border-radius: 20px;
  flex-shrink: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Name = styled.h1`
  font-family: 'OngleipParkDahyeon';
  font-size: 48px;
  margin: 0;
  color: ${p => p.theme.text};
`;

const Description = styled.p`
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;
  color: ${p => p.theme.subText};
  line-height: 1.8;
  white-space: pre-line;
  margin: 0;
`;

const BackButton = styled.button`
  width: fit-content;
  padding: 10px 24px;
  border: none;
  border-radius: 20px;
  background-color: #ffb6c1;
  color: white;
  font-family: 'OngleipParkDahyeon';
  font-size: 18px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: #ff9eb0;
  }
`;
