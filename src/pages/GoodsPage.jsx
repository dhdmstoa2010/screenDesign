import { useState } from 'react';
import styled from 'styled-components';
import GoodsCard from '../components/GoodsCard';
// 굿즈 이미지들 
import chiikawa_doll1 from '../assets/criminal_chiikawa.png';
import usagi_doll1 from '../assets/usagi_doll.png';
import chiikawa_phonecase from '../assets/chiikawa_phonecase.png';
import hachiware_suit from '../assets/Hachiware_suit.png';
import bammanzu_sticker from '../assets/bammanzu_sticker.png';
import momonga_hairtie from '../assets/momonga_hairtie.png';
import bammanzu_haircap from '../assets/bammanzu_haircap.png';
import usagi_cap from '../assets/usagi_cap.png';

// 굿즈 목록 데이터
export const goodsList = [
  { id: 1, name: "수감 치이카와 미니 마스코트",                              price: "₩ 15,900 KRW", image: chiikawa_doll1,    tag: "NEW",  category: "인형" },
  { id: 2, name: "모치코로린 (우사기)",                                      price: "₩ 15,900 KRW", image: usagi_doll1,       tag: "",     category: "인형" },
  { id: 3, name: "치이카와 플럼프 프레임 iPhone17e/16e MagSafe 대응 케이스", price: "₩ 49,000 KRW", image: chiikawa_phonecase, tag: "BEST", category: "악세서리" },
  { id: 4, name: "하치와레 KIDS 인형 옷 바디수트",                           price: "₩ 67,700 KRW", image: hachiware_suit,     tag: "",     category: "의류" },
  { id: 5, name: "치이카와 드롭 블록 스티커 (쿠리만쥬)",                     price: "₩ 6,700 KRW",  image: bammanzu_sticker,  tag: "NEW",  category: "문구" },
  { id: 6, name: "모몽가 진주 헤어 악세사리",                                price: "₩ 19,700 KRW", image: momonga_hairtie,   tag: "",     category: "악세서리" },
  { id: 7, name: "쿠리만쥬 흡수 헤어 캡",                                   price: "₩ 27,100 KRW", image: bammanzu_haircap,  tag: "BEST", category: "의류" },
  { id: 8, name: "우사기 파크 우키우키 인형 모자",                           price: "₩ 39,400 KRW", image: usagi_cap,         tag: "",     category: "의류" },
];

const categories = ['전체', '인형', '문구', '의류', '악세서리'];

function GoodsPage() {
  const [selected, setSelected] = useState('전체');

  // 선택된 카테고리에 맞게 필터링
  const filtered = selected === '전체'
    ? goodsList
    : goodsList.filter((item) => item.category === selected);

  return (
    <Container>
      <Title>굿즈</Title>

      {/* 카테고리 필터 버튼 */}
      <List>
        {categories.map((cat) => (
          <FilterBtn
            key={cat}
            className={selected === cat ? 'active' : ''}
            onClick={() => setSelected(cat)}
          >
            {cat}
          </FilterBtn>
        ))}
      </List>

      {/* 굿즈 카드 목록 */}
      <Grid>
        {filtered.map((item) => (
          <GoodsCard key={item.id}
            name={item.name}
            price={item.price}
            tag={item.tag}
            image={item.image} />
        ))}
      </Grid>
    </Container>
  );
}

export default GoodsPage;

// 전체 페이지 레이아웃
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  padding: 50px 40px 80px;
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.h1`
  font-family: 'OngleipParkDahyeon';
  font-size: 48px;
  margin: 0 0 10px;
  color: black;
`;

// 필터 버튼 묶음
const List = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  justify-content: center;
`;

const FilterBtn = styled.button`
  padding: 8px 22px;
  border-radius: 30px;
  border: 1.5px solid #ddd;
  background-color: white;
  font-family: 'Pretendard', sans-serif;
  font-size: 15px;
  color: #555;
  cursor: pointer;
  transition: 0.2s;

  &.active {
    background-color: #ffd6de;
    border-color: #ffd6de;
    color: white;
  }

  &:hover {
    background-color: #ff9eb0;
    border-color: #ff9eb0;
    color: white;
  }
`;

// 4열 그리드 - 화면 작아지면 3열, 2열로 줄어듦
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
