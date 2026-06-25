import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PlainButton from '../components/PlainButton';


function LoginPage() {
    // 아이디,비번 state 관리
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        if (id && password) {
            navigate('/');
        } else {
            alert('아이디와 비밀번호를 입력해주세요.');
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
                            onChange={(e) => setId(e.target.value)} // 입력값 변경시 상태 업데이트
                        />
                    </InputGroup>

                    <InputGroup>
                        <Label>비밀번호</Label>
                        <Input type="password"
                            placeholder="비밀번호를 입력해 주세요"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} /* 입력값 변경시 상태 업데이트 */
                        />
                    </InputGroup>

                    <PlainButton type="submit" name="로그인" />
                </Form>

                {/* 회원가입, 비번 찾기 페이지 이동 버튼 */}
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

const LoginContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 70px);
    background-color: ${p => p.theme.bg};
    transition: background-color 0.3s;
`;

const LoginBox = styled.div`
    background-color: ${p => p.theme.card};
    border-radius: 20px;
    padding: 50px 60px;
    width: 100%;
    max-width: 420px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: background-color 0.3s;
`;

const Title = styled.h2`
    font-family: 'OngleipParkDahyeon';
    font-size: 36px;
    text-align: center;
    margin: 0 0 30px;
    color: ${p => p.theme.text};
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
    color: ${p => p.theme.mutedText};
`;

const Input = styled.input`
    height: 46px;
    border: 1px solid ${p => p.theme.inputBorder};
    border-radius: 10px;
    padding: 0 14px;
    font-size: 15px;
    font-family: 'Pretendard', sans-serif;
    outline: none;
    transition: 0.2s;
    background-color: ${p => p.theme.input};
    color: ${p => p.theme.inputText};

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
    color: ${p => p.theme.mutedText};

    span {
        cursor: pointer;
        &:hover {
            color: ${p => p.theme.subText};
        }
    }
`;