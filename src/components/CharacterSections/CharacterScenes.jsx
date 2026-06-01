import styled from 'styled-components';

// 명장면 섹션
// scenes(배열 [{image, description}])
function CharacterScenes({ scenes = [] }) {
    return (
        <Section>
            <SectionTitle>명장면</SectionTitle>
            <SceneList>
                {scenes.map((scene, id) => (
                    <SceneItem key={id} reverse={id % 2 !== 0}> {/*  reverse=true 호출 하는 부분 */}
                        <SceneImage src={scene.image} alt={`명장면 ${id + 1}`} />
                        <SceneDesc>{scene.description}</SceneDesc>
                    </SceneItem>
                ))}
            </SceneList>
        </Section>
    );
}

export default CharacterScenes;

// 스타일 지정

const Section = styled.section`
    width: 85%;
    max-width: 1100px;
    margin: 70px auto 0;
`;

const SectionTitle = styled.h2`
    font-family: 'OngleipParkDahyeon';
    font-size: 36px;
    margin: 0 0 30px;
    color: black;
    border-left: 6px solid #ffb6c1;
    padding-left: 16px;
`;

const SceneList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

const SceneItem = styled.div`
    display: flex;
    flex-direction: ${(props) => props.reverse ? 'row-reverse' : 'row'}; // 홀수일 때 reverse=true가 되어서 이미지가 오른쪽으로 감 짝수면 왼쪽 배치
    gap: 40px;
    align-items: center;
    background-color: white;
    border-radius: 24px;
    padding: 30px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.04);
`;

const SceneImage = styled.img`
    width: 320px;
    height: 220px;
    object-fit: cover;
    border-radius: 16px;
    flex-shrink: 0;
`;

const SceneDesc = styled.p`
    font-family: 'Pretendard', sans-serif;
    font-size: 16px;
    color: #444;
    line-height: 1.8;
    margin: 0;
    white-space: pre-line;
`;
