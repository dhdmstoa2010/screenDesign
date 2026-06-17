import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function GoodsCard({ id, name, price, tag, image, link }) {
  const navigate = useNavigate(); // 리액트 라우터 hooks

  return (
    /* 카드 클릭 시 굿즈 상세 페이지로 이동 */
    <Card onClick={() => navigate(`/goods/${id}`)}>
      {tag && <Tag>{tag}</Tag>}
      <ImageBox>
        {image && <GoodsImage src={image} alt={name} />}
      </ImageBox>
      <CardInfo>
        <GoodsName>{name}</GoodsName>
        <Price>{price}</Price>
        <LookButton
          onClick={(e) => {
            e.stopPropagation(); // 카드 클릭 이벤트 전파 막기
            link && window.open(link, '_blank');
          }}
        >
          보러가기
        </LookButton>
      </CardInfo>
    </Card>
  );
}

export default GoodsCard;

const Card = styled.div`
  background-color: ${p => p.theme.card};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: 0.3s;
  position: relative;
  cursor: pointer;

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
  background-color: ${p => p.theme.imageBox};
  overflow: hidden;
  transition: background-color 0.3s;
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
  color: ${p => p.theme.text};
`;

const Price = styled.p`
  font-family: 'Pretendard', sans-serif;
  font-size: 15px;
  color: ${p => p.theme.subText};
  margin: 0;
`;

const LookButton = styled.button`
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
