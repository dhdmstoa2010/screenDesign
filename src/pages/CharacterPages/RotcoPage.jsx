import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// 섹션 컴포넌트
import CharacterBanner from '../../components/CharacterSections/CharacterBanner';
import CharacterProfile from '../../components/CharacterSections/CharacterProfile';
import CharacterFeatures from '../../components/CharacterSections/CharacterFeatures';
import CharacterScenes from '../../components/CharacterSections/CharacterScenes';
import CharacterFriends from '../../components/CharacterSections/CharacterFriends';

import bannerImg from '../../assets/RotcoPageImage.jpg';
import profileImg from '../../assets/rotco_card.png';
import sceneImg1 from '../../assets/RotcoBest.jpg';
import chiikawaImg from '../../assets/chiikawa_card.png';
import hachiwareImg from '../../assets/Hachiware_card.png';

function RotcoPage() {
    const navigate = useNavigate();

    const bannerData = {
        bg: bannerImg,
        name: "랏코",
    };

    const profileData = {
        image: profileImg,
        items: [
            { label: "이름", value: "랏코 (ラッコ)" },
            { label: "성격", value: "따듯하고 섬세한 성격을 가지고 있다. 강자로서의 책임감이 강하다" },
            { label: "좋아하는 것", value: "맛있는 디저트를 먹는 것 " },
            { label: "특기", value: "싸움" },
            { label: "친구", value: "치이카와, 하치와레" },
        ],
    };

    const featuresData = [
        {
            id: 1,
            title: "토벌에 강하고 능하다",
            description: "토벌 랭킹 1위로 작중 먼작귀 중에 압도적으로 강하다",
        },
        {
            id: 2,
            title: "달콤한 디저트류를 좋아한다.",
            description: ' 엄근진하고 간지나는 모습과는 달리 달콤한 디저트류를 매우 좋아한다. 딸기 파르페 같은 단 것을 먹으면 표정이 순하게 바뀐다.',
        },
        {
            id: 3,
            title: "진지한 말투를 가졌다",
            description: "일상적인 대화도 진지한 말투로 구사하는 재주가 있다. 예를 들면 식당에서 음식이 나올 때 비장하게 '온다!' 하거나",
        },
    ];

    const scenesData = [
        {
            id: 1,
            image: sceneImg1,
            description: "맛있는 디저트를 먹는 랏코.",
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

export default RotcoPage;

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;
