import styled from 'styled-components';

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

const Section = styled.section`
    width: 85%;
    max-width: 1100px;
    margin: 70px auto 0;
`;

const SectionTitle = styled.h2`
    font-family: 'OngleipParkDahyeon';
    font-size: 36px;
    margin: 0 0 30px;
    color: ${p => p.theme.text};
    border-left: 6px solid #ffb6c1;
    padding-left: 16px;
`;

const ProfileBox = styled.div`
    display: flex;
    gap: 50px;
    align-items: flex-start;
    background-color: ${p => p.theme.card};
    border-radius: 24px;
    padding: 40px;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    transition: background-color 0.3s;
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
    border-bottom: 1px solid ${p => p.theme.rowBorder};
    padding-bottom: 12px;
`;

const Label = styled.span`
    color: ${p => p.theme.mutedText};
    min-width: 80px;
`;

const Value = styled.span`
    color: ${p => p.theme.subText};
`;
