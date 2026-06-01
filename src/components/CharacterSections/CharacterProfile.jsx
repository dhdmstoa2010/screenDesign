import styled from 'styled-components';

// 캐릭터 기본 프로필 섹션
// props: image(프로필 이미지), items(프로필 항목 배열 [{label, value}])
function CharacterProfile({ image, items = [] }) {
    return (
        <Section>
            <SectionTitle>프로필</SectionTitle>
            <ProfileBox>
                <ProfileImage src={image} alt="프로필" />
                <ProfileInfo>
                    {items.map((item, i) => (
                        <Row key={i}>
                            <Label>{item.label}</Label>
                            <Value>{item.value}</Value>
                        </Row>
                    ))}
                </ProfileInfo>
            </ProfileBox>
        </Section>
    );
}

export default CharacterProfile;

// 스타일 지정

const Section = styled.section`
    width: 85%;
    max-width: 1100px;
    margin: 70px auto 0;
`;

const SectionTitle = styled.h2`
    font-family: 'OngleipParkDahyeon';
    font-size: 36px;
    margin: 0 0 30px;
    color: black;
    border-left: 6px solid #ffb6c1; // 인용 표시 같은 부분
    padding-left: 16px;
`;

const ProfileBox = styled.div`
    display: flex;
    gap: 50px;
    align-items: flex-start;
    background-color: white;
    border-radius: 24px;
    padding: 40px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
`;

const ProfileImage = styled.img`
    width: 220px;
    height: 220px;
    object-fit: cover;
    border-radius: 20px;
    flex-shrink: 0;
`;

const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex: 1;
`;

const Row = styled.div`
    display: flex;
    gap: 20px;
    font-family: 'Pretendard', sans-serif;
    font-size: 16px;
    border-bottom: 1px solid #f0f0f0;
    padding-bottom: 12px;
`;

const Label = styled.span`
    color: #aaa;
    min-width: 80px;
`;

const Value = styled.span`
    color: #333;
`;
