import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import { goodsList } from './GoodsPage';

function GoodsDetailPage() {
    const { id } = useParams(); // URL에서 굿즈 id 추출
    const navigate = useNavigate();
    const item = goodsList.find((g) => g.id === Number(id)); // id로 해당 굿즈 데이터 찾기

    return (
        <Container>
            <Card>
                <Left>
                    <ImageBox>
                        <GoodsImage src={item.image} alt={item.name} />
                    </ImageBox>
                </Left>

                <Right>
                    {item.tag && <Tag>{item.tag}</Tag>}
                    <Name>{item.name}</Name>
                    <Price>{item.price}</Price>

                    <Divider />

                    <CategoryRow>
                        <Label>카테고리</Label>
                        <Value>{item.category}</Value>
                    </CategoryRow>
                </Right>
            </Card>
        </Container>
    );
}

export default GoodsDetailPage;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 70px);
    padding: 60px 40px;
    box-sizing: border-box;
    background-color: ${p => p.theme.bg};
`;

const Card = styled.div`
    display: flex;
    gap: 60px;
    align-items: flex-start;
    background-color: ${p => p.theme.card};
    border-radius: 30px;
    padding: 50px 60px;
    max-width: 900px;
    width: 100%;
    box-shadow: 0 8px 30px rgba(0,0,0,0.07);
    transition: background-color 0.3s;
`;

const Left = styled.div`
    flex-shrink: 0;
`;

const ImageBox = styled.div`
    width: 300px;
    height: 300px;
    border-radius: 20px;
    overflow: hidden;
    background-color: ${p => p.theme.imageBox};
`;

const GoodsImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Right = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    flex: 1;
`;

const Tag = styled.span`
    width: fit-content;
    background-color: #ffb6c1;
    color: white;
    font-family: 'Pretendard', sans-serif;
    font-size: 13px;
    font-weight: bold;
    padding: 4px 14px;
    border-radius: 20px;
`;

const Name = styled.h1`
    font-family: 'OngleipParkDahyeon';
    font-size: 28px;
    margin: 0;
    color: ${p => p.theme.text};
    line-height: 1.4;
`;

const Price = styled.p`
    font-family: 'Pretendard', sans-serif;
    font-size: 22px;
    font-weight: bold;
    color: #ff9eb0;
    margin: 0;
`;

const Divider = styled.hr`
    border: none;
    border-top: 1px solid ${p => p.theme.rowBorder};
    margin: 4px 0;
`;

const CategoryRow = styled.div`
    display: flex;
    gap: 16px;
    font-family: 'Pretendard', sans-serif;
    font-size: 15px;
`;

const Label = styled.span`
    color: ${p => p.theme.mutedText};
    min-width: 60px;
`;

const Value = styled.span`
    color: ${p => p.theme.subText};
`;
`   `