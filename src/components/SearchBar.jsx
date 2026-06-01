import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import characters from '../data/characters';
import { goodsList as goods } from '../pages/GoodsPage';
import searchIcon from '../assets/search.png';

function SearchBar() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const wrapperRef = useRef(null);

    // 검색어 바뀔 때마다 캐릭터 + 굿즈에서 필터링
    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.trim() === '') {
            setResults([]);
            setOpen(false);
            return;
        }

        const keyword = value.toLowerCase();

        const matchedCharacters = characters
            .filter((c) => c.name.includes(keyword) || c.description.includes(keyword))
            .map((c) => ({ ...c, category: '캐릭터' }));

        const matchedGoods = goods
            .filter((g) => g.name.includes(keyword))
            .map((g) => ({ ...g, category: '굿즈' }));

        setResults([...matchedCharacters, ...matchedGoods]);
        setOpen(true);
    };

    // 결과 클릭 시 해당 페이지로 이동
    const handleSelect = (path) => {
        navigate(path);
        setQuery('');
        setResults([]);
        setOpen(false);
    };

    // 검색창 바깥 클릭 시 드롭다운 닫기
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <Wrapper ref={wrapperRef}>
            <SearchBox>
                <SearchIcon src={searchIcon} alt="검색" />
                <SearchInput
                    type="text"
                    placeholder="검색"
                    value={query}
                    onChange={handleChange}
                />
            </SearchBox>

            {open && (
                <Dropdown>
                    {results.length === 0 ? (
                        <NoResult>검색 결과가 없습니다.</NoResult>
                    ) : (
                        results.map((item, i) => (
                            <ResultItem key={i} onClick={() => handleSelect(item.path)}>
                                {item.image && <Thumb src={item.image} alt={item.name} />}
                                <ResultInfo>
                                    <ResultName>{item.name}</ResultName>
                                    <CategoryTag>{item.category}</CategoryTag>
                                </ResultInfo>
                            </ResultItem>
                        ))
                    )}
                </Dropdown>
            )}
        </Wrapper>
    );
}

export default SearchBar;

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: 400px;
`;

const SearchBox = styled.div`
    width: 100%;
    height: 42px;
    background-color: #f9e8e8;
    border-radius: 25px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    border: 1px solid #d9d9d9;
    display: flex;
    align-items: center;
    padding: 0 15px;
    gap: 8px;
    transition: 0.3s;
    box-sizing: border-box;

    &:hover {
        background-color: #fdd0d0;
    }
`;

const SearchIcon = styled.img`
    width: 22px;
    height: 22px;
    flex-shrink: 0;
`;

const SearchInput = styled.input`
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: black;
    font-size: 15px;
    font-family: 'Pretendard', sans-serif;
`;

const Dropdown = styled.div`
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background-color: white;
    border-radius: 16px;
    box-shadow: 0 8px 28px rgba(0,0,0,0.12);
    overflow: hidden;
    z-index: 9999;
`;

const NoResult = styled.div`
    padding: 20px;
    text-align: center;
    font-family: 'Pretendard', sans-serif;
    font-size: 14px;
    color: #aaa;
`;

const ResultItem = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 12px 18px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background-color: #fff0f3;
    }
`;

const Thumb = styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 10px;
    flex-shrink: 0;
`;

const ResultInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
`;

const ResultName = styled.span`
    font-family: 'OngleipParkDahyeon';
    font-size: 16px;
    color: black;
`;

const CategoryTag = styled.span`
    font-family: 'Pretendard', sans-serif;
    font-size: 12px;
    color: #aaa;
`;
