import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// 섹션 컴포넌트
import CharacterBanner from '../../components/CharacterSections/CharacterBanner';
import CharacterProfile from '../../components/CharacterSections/CharacterProfile';
import CharacterFeatures from '../../components/CharacterSections/CharacterFeatures';
import CharacterScenes from '../../components/CharacterSections/CharacterScenes';
import CharacterFriends from '../../components/CharacterSections/CharacterFriends';

import bannerImg from '../../assets/UsagiPageImage.jpg';
import profileImg from '../../assets/usagi_card.png';
import sceneImg1 from '../../assets/UsagiBest.jpg';
import sceneImg2 from '../../assets/UsagiBest1.jpg';
import chiikawaImg from '../../assets/chiikawa_card.png';
import hachiwareImg from '../../assets/Hachiware_card.png';

function UsagiPage() {
    const navigate = useNavigate();

    const bannerData = {
        bg: bannerImg,
        name: "우사기",
    };

    const profileData = {
        image: profileImg,
        items: [
            { label: "이름", value: "우사기 (うさぎ)" },
            { label: "성격", value: "장난을 잘 치는 마이페이스에 시끄럽고 활발한 성격을 가진 개구쟁이" },
            { label: "좋아하는 것", value: "먹는 것, 싸움 " },
            { label: "특기", value: "싸움, 먹방, 인형뽑기, 제초" },
            { label: "친구", value: "치이카와, 하치와레" },
        ],
    };

    const featuresData = [
        {
            id: 1,
            title: "자유분방하다",
            description: "하고 싶은 일을 마음대로 하며 예측하기 어려운 행동을 자주 한다",
        },
        {
            id: 2,
            title: "에너지가 넘친다.",
            description: '항상 활발하고 텐션이 높다. \n 우라!, 야하! 같은 독특한 감탄사를 자주 외친다.',
        },
        {
            id: 3,
            title: "강하고 용감하다",
            description: "위험한 상황에서도 겁을 잘 내지 않는다.",
        },
    ];

    const scenesData = [
        {
            id: 1,
            image: sceneImg1,
            description: "치이카와의 물건을 훔쳐간 갈매기를 잡아주는 우사기.",
        },
        {
            id: 2,
            image: sceneImg2,
            description: "먹방하는 우사기",
        },
    ];

    const friendsData = [
        { image: chiikawaImg, name: "치이카와", path: "/character/chiikawa" },
        { image: hachiwareImg, name: "하치와레", path: "/character/hachiware" },
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

export default UsagiPage;

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;
