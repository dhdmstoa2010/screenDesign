import styled from 'styled-components';

import CharacterBanner from '../../components/CharacterSections/CharacterBanner';
import CharacterProfile from '../../components/CharacterSections/CharacterProfile';
import CharacterFeatures from '../../components/CharacterSections/CharacterFeatures';
import CharacterScenes from '../../components/CharacterSections/CharacterScenes';
import CharacterFriends from '../../components/CharacterSections/CharacterFriends';

import bannerImg from '../../assets/HachiwarePageImage.jpg';
import profileImg from '../../assets/Hachiware_card.png';
import sceneImg1 from '../../assets/HachiwareBest.jpg';
import sceneImg2 from '../../assets/HachiwareBest1.jpg';
import chiikawaImg from '../../assets/chiikawa_card.png';
import hachiwareImg from '../../assets/Hachiware_card.png';
import usagiImg from '../../assets/usagi_card.png';
import rotcoImg from '../../assets/rotco_card.png';

function HachiwarePage() {
    const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    `;

    const bannerData = {
        bg: bannerImg,
        name: "하치와레",
    };

    const profileData = {
        image: profileImg,
        items: [
            { label: "이름", value: "하치와레 (ハチワレ )" },
            { label: "성격", value: "사교적이고 상냥한 성격으로, 누구와도 잘 친해진다" },
            { label: "좋아하는 것", value: "카메라로 사진 찍기, 노래, 춤, 요리, 기타 " },
            { label: "특기", value: "기타 치기, 싸움, 공부" },
            { label: "친구", value: "치이카와, 우사기, 랏코" },
        ],
    };

    const featuresData = [
        {
            id: 1,
            title: "말을 잘한다",
            description: "친구들에게 상황을 설명하거나 \n 의견을 말하는 역할을 자주 맡는다.",
        },
        {
            id: 2,
            title: "긍정적이고 밝다",
            description: '어려운 상황에서도 낙천적으로 생각하려고 하며, 친구들을 격려해 준다.',
        },
        {
            id: 3,
            title: "용감하고 배려심이 깊다",
            description: "겁이 나더라도 친구를 위해 나서는 경우가 많다.",
        },
    ];

    const scenesData = [
        {
            id: 1,
            image: sceneImg1,
            description: "앞머리가 길어서 가르마가 사라져버린 하치와레 \n 귀엽다.",
        },
        {
            id: 2,
            image: sceneImg2,
            description: "헤어볼 토하는 하치와레",
        },
    ];

    const friendsData = [
        { image: chiikawaImg, name: "치이카와", path: "/character/chiikawa" },
        { image: usagiImg, name: "우사기", path: "/character/usagi" },
        { image: rotcoImg, name: "랏코", path: "/character/rotco" },
    ];

    return (
        <PageWrapper>
            <CharacterBanner {...bannerData} />
            <CharacterProfile {...profileData} />
            <CharacterFeatures items={featuresData} />
            <CharacterScenes scenes={scenesData} />
            <CharacterFriends friends={friendsData} />
        </PageWrapper>
    );
}

export default HachiwarePage;

