import styled from 'styled-components';

// 섹션 컴포넌트
import CharacterBanner from '../../components/CharacterSections/CharacterBanner';
import CharacterProfile from '../../components/CharacterSections/CharacterProfile';
import CharacterFeatures from '../../components/CharacterSections/CharacterFeatures';
import CharacterScenes from '../../components/CharacterSections/CharacterScenes';
import CharacterFriends from '../../components/CharacterSections/CharacterFriends';

import bannerImg from '../../assets/BammanzuPageImage.jpg';
import profileImg from '../../assets/bammanzu_card.png';
import sceneImg1 from '../../assets/BammanzuBest.jpg';
import chiikawaImg from '../../assets/chiikawa_card.png';
import sisaImg from '../../assets/sisa_card.png';

function BammanzuPage() {

    const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    `;

    const bannerData = {
        bg: bannerImg,
        name: "쿠리만쥬",
    };

    const profileData = {
        image: profileImg,
        items: [
            { label: "이름", value: "쿠리만쥬 (くりまんじゅう)" },
            { label: "성격", value: "과묵한 성격으로 혼자서 묵묵히 음식을 먹는 장면이 많지만 사실은 남을 잘 신경 써주는 따뜻한 성격의 소유자다" },
            { label: "좋아하는 것", value: "술, 고기 자르는 영상 보기" },
            { label: "특기", value: "먹방" },
            { label: "친구", value: "치이카와,시사  " },
        ],
    };

    const featuresData = [
        {
            id: 1,
            title: "술 자격증을 가지고 있다",
            description: "등장할 때마다 안주와 술이나 커피 등을 마신다. 마시고 나면 꼭 캬~ 하면서 하악질을 한다.",
        },
        {
            id: 2,
            title: "맛있는 음식을 좋아한다.",
            description: '음식과 음료를 즐기는 장면이 자주 나온다',
        },
        {
            id: 3,
            title: "숙취에 찌들면 얼굴이 파래진다",
            description: "얼굴이 파랗게 사색이 되어 멍하니 앉아 있는다. 그러곤 해장술로 맥주를 마신다.",
        },
    ];

    const scenesData = [
        {
            id: 1,
            image: sceneImg1,
            description: "목욕탕을 즐기는 쿠리만쥬",
        },
    ];

    const friendsData = [
        { image: chiikawaImg, name: "치이카와", path: "/character/chiikawa" },
        { image: sisaImg, name: "시사", path: "/character/sisa" },
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

export default BammanzuPage;

