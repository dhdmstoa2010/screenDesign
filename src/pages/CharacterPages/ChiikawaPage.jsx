import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

// 섹션 컴포넌트
import CharacterBanner from '../../components/CharacterSections/CharacterBanner';
import CharacterProfile from '../../components/CharacterSections/CharacterProfile';
import CharacterFeatures from '../../components/CharacterSections/CharacterFeatures';
import CharacterScenes from '../../components/CharacterSections/CharacterScenes';
import CharacterFriends from '../../components/CharacterSections/CharacterFriends';

// 이미지
import bannerImg from '../../assets/ChiikawaPageImage.jpg';
import profileImg from '../../assets/chiikawa_card.png';
import sceneImg1 from '../../assets/ChiikawaBest.jpg';
import sceneImg2 from '../../assets/ChiikawaBest1.jpg';
import sceneImg3 from '../../assets/ChiikawaBest3.jpg';
import hachiwareImg from '../../assets/Hachiware_card.png';
import usagiImg from '../../assets/usagi_card.png';
import rotcoImg from '../../assets/rotco_card.png';

function ChiikawaPage() {
    const navigate = useNavigate();

    const bannerData = {
        bg: bannerImg,
        name: "치이카와",
    };

    const profileData = {
        image: profileImg,
        items: [
            { label: "이름", value: "치이카와 (ちいかわ)" },
            { label: "성격", value: "겁이 많고 소심하지만 마음이 따뜻해요" },
            { label: "좋아하는 것", value: "핑크색 곰돌이 가방, 갈색 곰돌이 인형 " },
            { label: "특기", value: "운이 엄청나게 좋다, 시험 운은 안좋다" },
            { label: "친구", value: "하치와레, 우사기, 랏코" },
        ],
    };

    const featuresData = [
        {
            id: 1,
            title: "소심한 성격",
            description: "겁이 많고 잘 울지만\n항상 최선을 다한다.",
        },
        {
            id: 2,
            title: "잘 운다",
            description: '겁이 많아서 조금 놀라면 운다\n말을 할 수 없어서 눈물이 그렁그렁 맺혀선 "우...우우"거리는게 귀엽다.',
        },
        {
            id: 3,
            title: "노력파",
            description: "시험에 떨어져도 포기하지 않고\n계속 도전한다.",
        },
    ];

    const scenesData = [
        {
            id: 1,
            image: sceneImg1,
            description: "새로운 친구를 사귄 치이카와 \n 귀여운 치이카와가 귀여운 친구를 사귄 귀여운 장면",
        },
        {
            id: 2,
            image: sceneImg2,
            description: "괴물과 싸우려고 자세 잡는 치이카와",
        },
        {
            id: 3,
            image: sceneImg3,
            description: "머리에 기생 버섯이 자라난 치이카와"
        }
    ];

    const friendsData = [
        { image: hachiwareImg, name: "하치와레", path: "/character/hachiware" },
        { image: usagiImg, name: "우사기", path: "/character/usagi" },
        { image: rotcoImg, name: "랏코", path: "/character/rotco" },
    ];

    return (
        <PageWrapper>
            <CharacterBanner   {...bannerData} /> {/* 데이터가 많기 때문에 ... 으로 줄임 */}
            <CharacterProfile  {...profileData} />
            <CharacterFeatures items={featuresData} />
            <CharacterScenes scenes={scenesData} />
            <CharacterFriends friends={friendsData} />
        </PageWrapper>
    );
}

export default ChiikawaPage;

const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;
