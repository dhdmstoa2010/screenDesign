import styled from 'styled-components';

// 섹션 컴포넌트
import CharacterBanner from '../../components/CharacterSections/CharacterBanner';
import CharacterProfile from '../../components/CharacterSections/CharacterProfile';
import CharacterFeatures from '../../components/CharacterSections/CharacterFeatures';
import CharacterScenes from '../../components/CharacterSections/CharacterScenes';
import CharacterFriends from '../../components/CharacterSections/CharacterFriends';

import bannerImg from '../../assets/KaniPageImage.jpg';
import profileImg from '../../assets/kani_card.png';
import sceneImg1 from '../../assets/KaniBest.jpg';
import momongaImg from '../../assets/momonga_card.png';

function KaniPage() {

    const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    `;

    const bannerData = {
        bg: bannerImg,
        name: "카니",
    };

    const profileData = {
        image: profileImg,
        items: [
            { label: "이름", value: " 카니 (カニ)" },
            { label: "성격", value: "상냥한 성격으로, 정이 많은지 자기에게 먼저 다가와줬지만 이기적인 행동을 일삼는 모몽가에게도 늘 잘해준다." },
            { label: "좋아하는 것", value: "책 읽기" },
            { label: "특기", value: "요리하기" },
            { label: "친구", value: "모몽가" },
        ],
    };

    const featuresData = [
        {
            id: 1,
            title: "친구를 소중히 여김",
            description: "친구한테 선물을 받고 좋아하는 등 친구를 소중히 여긴다 ",
        },
        {
            id: 2,
            title: "헌책방에서 일한다",
            description: '모몽가가 책방에 놀러와 민폐를 끼치며 놀아달라고 하기도 한다.',
        },
        {
            id: 3,
            title: "모몽가를 아낀다",
            description: "모몽가는 카니를 부하정도로 생각하지만 카니는 모몽가를 친구로 생각한다.",
        },
    ];

    const scenesData = [
        {
            id: 1,
            image: sceneImg1,
            description: "모몽가를 끌고 가는 카니",
        },
    ];

    const friendsData = [
        { image: momongaImg, name: "모몽가", path: "/character/momonga" },
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

export default KaniPage;

