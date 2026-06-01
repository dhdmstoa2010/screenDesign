import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CardLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const Card = styled.div`
  width: 200px;
  background-color: white;
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  color: black;
  box-shadow: 0 4px 15px rgba(0,0,0,0.04);
  transition: 0.3s;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.08);
  }

  h3 {
    font-family: 'OngleipParkDahyeon';
    font-size: 24px;
    margin: 15px 0 8px;
  }

  p {
    font-family: 'Pretendard', sans-serif;
    font-size: 14px;
    line-height: 1.5;
    color: #555;
    margin: 0;
    white-space: pre-line;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 15px;
`;

function CharacterCard({ path, image, name, description }) {
  return (
    <CardLink to={path}>
      <Card>
        <CardImage src={image} />
        <h3>{name}</h3>
        <p>{description}</p>
      </Card>
    </CardLink>
  );
}

export default CharacterCard;
