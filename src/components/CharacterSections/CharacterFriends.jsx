import styled from 'styled-components';
import { Link } from 'react-router-dom';

function CharacterFriends({ friends = [] }) {
    return (
        <Section>
            <SectionTitle>친구들</SectionTitle>
            <FriendList>
                {/* friends 배열을 순회하며 특징 카드를 하나씩 렌더링 */}
                {friends.map((friend, i) => (
                    <FriendCard key={i} to={friend.path}>
                        <FriendImage src={friend.image} alt={friend.name} />
                        <FriendName>{friend.name}</FriendName>
                    </FriendCard>
                ))}
            </FriendList>
        </Section>
    );
}

export default CharacterFriends;

const Section = styled.section`
    width: 85%;
    max-width: 1100px;
    margin: 70px auto 80px;
`;

const SectionTitle = styled.h2`
    font-family: 'OngleipParkDahyeon';
    font-size: 36px;
    margin: 0 0 30px;
    color: ${p => p.theme.text};
    border-left: 6px solid #ffb6c1;
    padding-left: 16px;
`;

const FriendList = styled.div`
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
`;

const FriendCard = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: ${p => p.theme.text};
    transition: 0.3s;

    &:hover {
        transform: translateY(-5px);
    }
`;

const FriendImage = styled.img`
    width: 110px;
    height: 110px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0 4px 14px rgba(0,0,0,0.08);
`;

const FriendName = styled.span`
    font-family: 'OngleipParkDahyeon';
    font-size: 18px;
`;
