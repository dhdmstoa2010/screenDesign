import styled from 'styled-components';

// 섹션 컴포넌트
import CharacterBanner from '../../components/CharacterSections/CharacterBanner';
import CharacterProfile from '../../components/CharacterSections/CharacterProfile';
import CharacterFeatures from '../../components/CharacterSections/CharacterFeatures';
import CharacterScenes from '../../components/CharacterSections/CharacterScenes';
import CharacterFriends from '../../components/CharacterSections/CharacterFriends';

import bannerImg from '../../assets/SisaPageImage.jpg';
import profileImg from '../../assets/sisa_card.png';
import sceneImg1 from '../../assets/SisaBest.jpg';
import chiikawaImg from '../../assets/chiikawa_card.png';
import hachiwareImg from '../../assets/Hachiware_card.png';
import BammanzuImg from '../../assets/bammanzu_card.png';

function SisaPage() {

    const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    `;


    const bannerData = {
        bg: bannerImg,
        name: "시사",
    };

    const profileData = {
        image: profileImg,
        items: [
            { label: "이름", value: " 시사 (ーサー )" },
            { label: "성격", value: "집념이 강하고 성실한 성격이다. 친절하고 예의바른 성격으로 남에게 요리를 만들어주거나 나눠주는 것을 좋아한다." },
            { label: "좋아하는 것", value: "요리, 카페에서 뭔가 먹기" },
            { label: "특기", value: "라멘 요리하기" },
            { label: "친구", value: "치이카와, 하치와레" },
        ],
    };

    const featuresData = [
        {
            id: 1,
            title: "라멘 가게에서 일한다",
            description: "라멘 갑옷 씨가 운영하는 음식점 '라멘 로우'의 알바생이다. 처음에는 거절당했지만 꾸준한 요구에 갑옷 씨가 슈퍼 아르바이트 자격증을 따오면 일하게 해주겠다고 하자 자격증을 따오고 정식으로 채용된다. ",
        },
        {
            id: 2,
            title: "평소에 먹을걸 챙겨다닌다.",
            description: '먹을 것을 자주 들고 다니는지 초면의 인물에게도 음식을 잘 나눠준다.',
        },
        {
            id: 3,
            title: "사투리를 쓴다(미야코어)",
            description: "미야코어은 들으면 바로 미야코섬의 사람인 것을 알아챌 정도로 특색이 강하다. 콜라보 만화에서 치이카와 일행과 갑옷 씨는 위 두 인삿말을 듣고 무슨 뜻인지 전혀 알아듣지 못했다.",
        },
    ];

    const scenesData = [
        {
            id: 1,
            image: sceneImg1,
            description: "울고 있는 시사",
        },
    ];

    const friendsData = [
        { image: chiikawaImg, name: "치이카와", path: "/character/chiikawa" },
        { image: hachiwareImg, name: "하치와레", path: "/character/hachiware" },
        { image: BammanzuImg, name: "쿠리만쥬", path: "/character/bammanzu" },
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

export default SisaPage;

