import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function FindPasswordPage() {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('입력하신 이메일로 비밀번호 재설정 링크를 보내드렸습니다.');
        navigate('/login');
    };

    return (
        <Wrapper>
            <Box>
                <Title>비밀번호 찾기</Title>
                <Desc>가입 시 등록한 이메일을 입력하시면{'\n'}비밀번호 재설정 링크를 보내드려요.</Desc>
                <Form onSubmit={handleSubmit}>
                    <InputGroup>
                        <Label>아이디</Label>
                        <Input type="text" placeholder="아이디를 입력해 주세요" />
                    </InputGroup>
                    <InputGroup>
                        <Label>이메일</Label>
                        <Input type="email" placeholder="이메일을 입력해 주세요" />
                    </InputGroup>
                    <SubmitButton type="submit">재설정 링크 받기</SubmitButton>
                </Form>
                <BackText onClick={() => navigate('/login')}>로그인으로 돌아가기</BackText>
            </Box>
        </Wrapper>
    );
}

export default FindPasswordPage;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 70px);
    background-color: #FCF8F8;
`;

const Box = styled.div`
    background-color: white;
    border-radius: 20px;
    padding: 50px 60px;
    width: 100%;
    max-width: 420px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const Title = styled.h2`
    font-family: 'OngleipParkDahyeon';
    font-size: 36px;
    text-align: center;
    margin: 0 0 14px;
    color: black;
`;

const Desc = styled.p`
    font-family: 'Pretendard', sans-serif;
    font-size: 14px;
    color: #888;
    text-align: center;
    white-space: pre-line;
    line-height: 1.7;
    margin: 0 0 28px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

const Label = styled.label`
    font-family: 'Pretendard', sans-serif;
    font-size: 14px;
    color: #555;
`;

const Input = styled.input`
    height: 46px;
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 0 14px;
    font-size: 15px;
    font-family: 'Pretendard', sans-serif;
    outline: none;
    transition: 0.2s;

    &:focus {
        border-color: #ffb6c1;
    }
`;

const SubmitButton = styled.button`
    margin-top: 8px;
    height: 50px;
    border: none;
    border-radius: 35px;
    background-color: #ffb6c1;
    color: white;
    font-size: 20px;
    font-family: 'OngleipParkDahyeon';
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: #ff9eb0;
        transform: translateY(-2px);
    }
`;

const BackText = styled.p`
    font-family: 'Pretendard', sans-serif;
    font-size: 14px;
    color: #aaa;
    text-align: center;
    margin-top: 20px;
    cursor: pointer;

    &:hover {
        color: #555;
    }
`;
