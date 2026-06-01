import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PlainButton from '../components/PlainButton';

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 70px);
    background-color: #FCF8F8;
`;

const LoginBox = styled.div`
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
    margin: 0 0 30px;
    color: black;
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


const SubMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 20px;
    font-family: 'Pretendard', sans-serif;
    font-size: 14px;
    color: #888;

    span {
        cursor: pointer;
        &:hover {
        color: #555;
        }
    }
`;

function LoginPage() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // 로그인 성공 후 페이지 이동을 위한 훅

    const handleLogin = (e) => {
        e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지

        if (id && password) {       // 아이디, 비번 둘 다 입력했으면
            navigate('/home');        // 홈으로 이동
        } else {
            alert('아이디와 비밀번호를 입력해주세요.');
        }


        if (id === '' || password === '') {
            alert('아이디와 비밀번호를 모두 입력해 주세요.');
            return;
        }

    }

    return (
        <LoginContainer>
            <LoginBox>
                <Title>로그인</Title>
                <Form onSubmit={handleLogin}>
                    <InputGroup>
                        <Label>아이디</Label>
                        <Input
                            type="text"
                            placeholder="아이디를 입력해 주세요"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                    </InputGroup>

                    <InputGroup>
                        <Label>비밀번호</Label>
                        <Input type="password" placeholder="비밀번호를 입력해 주세요" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </InputGroup>

                    <PlainButton type="submit" name="로그인" />
                </Form>

                <SubMenu>
                    <span onClick={() => navigate('/signup')}>회원가입</span>
                    <span>|</span>
                    <span onClick={() => navigate('/find-password')}>비밀번호 찾기</span>
                </SubMenu>
            </LoginBox>
        </LoginContainer>
    );
}

export default LoginPage;
