import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: 0.3s;
  position: relative;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.1);
  }
`;

const Tag = styled.span`
  position: absolute;
  top: 12px;
  left: 12px;
  background-color: #ffb6c1;
  color: white;
  font-family: 'Pretendard', sans-serif;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 10px;
  border-radius: 20px;
  z-index: 1;
`;

const ImageBox = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  background-color: #fef0f0;
  overflow: hidden;
`;

const GoodsImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardInfo = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const GoodsName = styled.p`
  font-family: 'OngleipParkDahyeon';
  font-size: 20px;
  margin: 0;
  color: black;
`;

const Price = styled.p`
  font-family: 'Pretendard', sans-serif;
  font-size: 15px;
  color: #555;
  margin: 0;
`;

const BuyButton = styled.button`
  margin-top: 8px;
  height: 40px;
  border: none;
  border-radius: 25px;
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

function GoodsCard({ name, price, tag, image }) {
  return (
    <Card>
      {tag && <Tag>{tag}</Tag>}
      <ImageBox>
        {image && <GoodsImage src={image} alt={name} />}
      </ImageBox>
      <CardInfo>
        <GoodsName>{name}</GoodsName>
        <Price>{price}</Price>
        <BuyButton>담기</BuyButton>
      </CardInfo>
    </Card>
  );
}

export default GoodsCard;
