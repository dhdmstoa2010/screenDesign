import styled from 'styled-components';

// 섹션 컴포넌트
import CharacterBanner from '../../components/CharacterSections/CharacterBanner';
import CharacterProfile from '../../components/CharacterSections/CharacterProfile';
import CharacterFeatures from '../../components/CharacterSections/CharacterFeatures';
import CharacterScenes from '../../components/CharacterSections/CharacterScenes';
import CharacterFriends from '../../components/CharacterSections/CharacterFriends';

import bannerImg from '../../assets/PazamaPageImage.jpg';
import profileImg from '../../assets/pazama_card.png';
import sceneImg1 from '../../assets/PazamaBest.jpg';
import chiikawaImg from '../../assets/chiikawa_card.png';
import hachiwareImg from '../../assets/Hachiware_card.png';
import usagiImg from '../../assets/usagi_card.png';

function PazamaPage() {

    const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    `;

    const bannerData = {
        bg: bannerImg,
        name: "파자마파티즈",
    };

    const profileData = {
        image: profileImg,
        items: [
            { label: "이름", value: "파자마파티즈" },
            { label: "특기", value: "춤추기" },
            { label: "친구", value: "치이카와,하치와레,우사기" },
        ],
    };

    const featuresData = [
        {
            id: 1,
            title: "먼작귀들의 아이돌",
            description: "네명의 멤버가 귀여운 노래와 춤을 추는 그룹",
        },
    ];

    const scenesData = [
        {
            id: 1,
            image: sceneImg1,
            description: "현수막 걸고 홍보하는 파자마파티즈",
        },
    ];

    const friendsData = [
        { image: chiikawaImg, name: "치이카와", path: "/character/chiikawa" },
        { image: hachiwareImg, name: "하치와레", path: "/character/hachiware" },
        { image: usagiImg, name: "우사기", path: "/character/usagi" },
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

export default PazamaPage;

