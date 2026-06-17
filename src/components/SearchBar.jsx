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
    const searchRef = useRef(null); // 검색창 외부 클릭 감지용

    const handleChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.trim() === '') { // 앞뒤 공백 삭제 
            setResults([]);
            setOpen(false);
            return;
        }

        const keyword = value;

        // 캐릭터 이름 또는 설명에 키워드가 포함된 것 필터링
        const matchedCharacters = characters
            .filter((c) => c.name.includes(keyword) || c.description.includes(keyword))
            .map((c) => ({ ...c, category: '캐릭터' }));

        // 굿즈 이름에 키워드가 포함된 것 필터링    
        const matchedGoods = goods
            .filter((g) => g.name.includes(keyword))
            .map((g) => ({ ...g, category: '굿즈' }));

        setResults([...matchedCharacters, ...matchedGoods]);
        setOpen(true);
    };

    const handleSelect = (path) => {
        navigate(path); // 해당 페이지 이동
        setQuery(''); // 검색입력창 초기화
        setResults([]); // 결과 초기화
        setOpen(false); // 검색목록 닫음
    };

    // 검색창 바깥 클릭시 드롭다운 닫음
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside); // 컴포넌트 언마운트 시 이벤트 리스너 제거 (메모리 누수 방지)
    }, []);

    return (
        <Wrapper ref={searchRef}>
            <SearchBox>
                <SearchIcon src={searchIcon} alt="검색" />
                <SearchInput
                    type="text"
                    placeholder="검색"
                    value={query}
                    onChange={handleChange}
                />
            </SearchBox>

            {/* 드롭다운: 검색어 입력 시에만 표시 */}
            {open && (
                <Dropdown>
                    {results.length === 0 ? (
                        <NoResult>검색 결과가 없습니다.</NoResult>
                    ) : (
                        // 검색 결과를 순회하며 항목 렌더링
                        results.map((item) => (
                            <ResultItem key={item.path} onClick={() => handleSelect(item.path)}>
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
    background-color: ${p => p.theme.searchBox};
    border-radius: 25px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    border: 1px solid ${p => p.theme.inputBorder};
    display: flex;
    align-items: center;
    padding: 0 15px;
    gap: 8px;
    transition: 0.3s;
    box-sizing: border-box;

    &:hover {
        background-color: ${p => p.theme.searchBoxHover};
    }
`;

const SearchIcon = styled.img`
    width: 22px;
    height: 22px;
    flex-shrink: 0;
    filter: ${p => p.theme.iconFilter};
    transition: filter 0.3s;
`;

const SearchInput = styled.input`
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: ${p => p.theme.text};
    font-size: 15px;
    font-family: 'Pretendard', sans-serif;

    &::placeholder {
        color: ${p => p.theme.mutedText};
    }
`;

const Dropdown = styled.div`
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    background-color: ${p => p.theme.card};
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
    color: ${p => p.theme.mutedText};
`;

const ResultItem = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 12px 18px;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
        background-color: ${p => p.theme.searchBoxHover};
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
    color: ${p => p.theme.text};
`;

const CategoryTag = styled.span`
    font-family: 'Pretendard', sans-serif;
    font-size: 12px;
    color: ${p => p.theme.mutedText};
`;
