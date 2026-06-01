import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// 섹션 컴포넌트
import CharacterBanner from '../../components/CharacterSections/CharacterBanner';
import CharacterProfile from '../../components/CharacterSections/CharacterProfile';
import CharacterFeatures from '../../components/CharacterSections/CharacterFeatures';
import CharacterScenes from '../../components/CharacterSections/CharacterScenes';
import CharacterFriends from '../../components/CharacterSections/CharacterFriends';

import bannerImg from '../../assets/MomongaPageImage.jpg';
import profileImg from '../../assets/momonga_card.png';
import sceneImg1 from '../../assets/MomongaBest.jpg';

function MomongaPage() {
    const navigate = useNavigate();

    const bannerData = {
        bg: bannerImg,
        name: "모몽가",
    };

    const profileData = {
        image: profileImg,
        items: [
            { label: "이름", value: "모몽가 (モモンガ)" },
            { label: "성격", value: "귀여운 생김새와는 달리 제멋대로인 성격을 가졌다. 잘못을 해도 절대 사과하지 않는다. " },
            { label: "좋아하는 것", value: "자기 자신, 귀여운 것 " },
            { label: "특기", value: "시비걸기, 귀여운 척" },
            { label: "친구", value: "없음" },
        ],
    };

    const featuresData = [
        {
            id: 1,
            title: "귀여운 척을 한다",
            description: "예쁨 받고 싶어하고 귀여운 것을 따라한다",
        },
        {
            id: 2,
            title: "자기중심적이다",
            description: '원하는 건 꼭 얻고 싶어한다.',
        },
        {
            id: 3,
            title: "관심 받는걸 좋아한다",
            description: "위험한 상황에서도 겁을 잘 내지 않는다.",
        },
    ];

    const scenesData = [
        {
            id: 1,
            image: sceneImg1,
            description: "치이카와한테 발차기 맞는 모몽가",
        },
    ];

    const friendsData = [
        { image: chiikawaImg, name: "치이카와", path: "/character/chiikawa" },
        { image: usagiImg, name: "우사기", path: "/character/usagi" },
        { image: rotcoImg, name: "랏코", path: "/character/rotco" },
    ];

    return (
        <PageWrapper>
            <CharacterBanner   {...bannerData} />
            <CharacterProfile  {...profileData} />
            <CharacterFeatures items={featuresData} />
            <CharacterScenes scenes={scenesData} />
            <CharacterFriends friends={friendsData} />
        </PageWrapper>
    );
}

export default MomongaPage;

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;
