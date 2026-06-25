import { useState } from 'react';
import styled from 'styled-components';
import GoodsCard from '../components/GoodsCard';
import chiikawa_doll1 from '../assets/criminal_chiikawa.png';
import usagi_doll1 from '../assets/usagi_doll.png';
import chiikawa_phonecase from '../assets/chiikawa_phonecase.png';
import hachiware_suit from '../assets/Hachiware_suit.png';
import bammanzu_sticker from '../assets/bammanzu_sticker.png';
import momonga_hairtie from '../assets/momonga_hairtie.png';
import bammanzu_haircap from '../assets/bammanzu_haircap.png';
import usagi_cap from '../assets/usagi_cap.png';

export const goodsList = [
  { id: 1, name: "수감 치이카와 미니 마스코트", price: "₩ 15,900 KRW", priceNum: 15900, image: chiikawa_doll1, tag: "NEW", category: "인형", link: "https://chiikawamarket.jp/products/4589468449362" },
  { id: 2, name: "모치코로린 (우사기)", price: "₩ 15,900 KRW", priceNum: 15900, image: usagi_doll1, tag: "", category: "인형", link: "https://chiikawamarket.jp/ko/products/4513750146363?_pos=2&_sid=eaca139bb&_ss=r" },
  { id: 3, name: "치이카와 iPhone17e/16e 폰케이스", price: "₩ 49,000 KRW", priceNum: 49000, image: chiikawa_phonecase, tag: "BEST", category: "악세서리", link: "https://chiikawamarket.jp/products/4550213591940" },
  { id: 4, name: "하치와레 KIDS 인형 옷 바디수트", price: "₩ 67,700 KRW", priceNum: 67700, image: hachiware_suit, tag: "", category: "의류", link: "https://chiikawamarket.jp/products/4580052815112" },
  { id: 5, name: "치이카와 드롭 블록 스티커 (쿠리만쥬)", price: "₩ 6,700 KRW", priceNum: 6700, image: bammanzu_sticker, tag: "NEW", category: "문구", link: "https://chiikawamarket.jp/products/4550432283022" },
  { id: 6, name: "모몽가 진주 헤어 악세사리", price: "₩ 19,700 KRW", priceNum: 19700, image: momonga_hairtie, tag: "", category: "악세서리", link: "https://chiikawamarket.jp/products/4548387349535" },
  { id: 7, name: "쿠리만쥬 흡수 헤어 캡", price: "₩ 27,100 KRW", priceNum: 27100, image: bammanzu_haircap, tag: "BEST", category: "의류", link: "https://chiikawamarket.jp/products/4548387348781" },
  { id: 8, name: "우사기 파크 우키우키 인형 모자", price: "₩ 39,400 KRW", priceNum: 39400, image: usagi_cap, tag: "", category: "의류", link: "https://chiikawamarket.jp/products/4571609361947" },
];

const categories = ['전체', '인형', '문구', '의류', '악세서리'];

function GoodsPage() {
  const [selected, setSelected] = useState('전체');

  // 전체 선택 시 전부 표시, 아니면 해당 카테고리만 필터링
  const filtered = selected === '전체' ? goodsList : goodsList.filter((item) => item.category === selected);

  return (
    <Container>
      <Title>굿즈</Title>

      {/* 카테고리 필터 버튼 목록 */}
      <List>
        {categories.map((cate) => (
          <FilterBtn
            key={cate}
            className={selected === cate ? 'active' : ''}
            onClick={() => setSelected(cate)}
          >
            {cate}
          </FilterBtn>
        ))}
      </List>


      {/* 필터링된 굿즈 카드 목록 */}
      <Grid>
        {filtered.map((item) => (
          <GoodsCard key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            tag={item.tag}
            image={item.image}
            link={item.link} />
        ))}
      </Grid>
    </Container>
  );
}

export default GoodsPage;

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
  color: ${p => p.theme.text};
`;

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
  border: 1.5px solid ${p => p.theme.inputBorder};
  background-color: ${p => p.theme.card};
  font-family: 'Pretendard', sans-serif;
  font-size: 15px;
  color: ${p => p.theme.subText};
  cursor: pointer;
  transition: 0.2s;

  &.active {
    background-color: #fabac7;
    border-color: #fabac7;
    color: white;
  }

  &:hover {
    background-color: #ff9eb0;
    border-color: #ff9eb0;
    color: white;
  }
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
