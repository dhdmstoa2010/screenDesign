import styled from 'styled-components';

function CharacterScenes({ scenes = [] }) {
    return (
        <Section>
            <SectionTitle>명장면</SectionTitle>
            <SceneList>
                {scenes.map((scene, id) => (
                    <SceneItem key={id} reverse={id % 2 !== 0}> {/* reverse는 id 값이 홀수일때 적용 */}
                        <SceneImage src={scene.image} alt={`명장면 ${id + 1}`} /> {/* id는 0부터 시작이라 1 더함*/}
                        <SceneDesc>{scene.description}</SceneDesc>
                    </SceneItem>
                ))}
            </SceneList>
        </Section>
    );
}

export default CharacterScenes;

const Section = styled.section`
    width: 85%;
    max-width: 1100px;
    margin: 70px auto 0;
`;

const SectionTitle = styled.h2`
    font-family: 'OngleipParkDahyeon';
    font-size: 36px;
    margin: 0 0 30px;
    color: ${p => p.theme.text};
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
    flex-direction: ${(props) => props.reverse ? 'row-reverse' : 'row'};
    gap: 40px;
    align-items: center;
    background-color: ${p => p.theme.card};
    border-radius: 24px;
    padding: 30px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.04);
    transition: background-color 0.3s;
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
    color: ${p => p.theme.subText};
    line-height: 1.8;
    margin: 0;
    white-space: pre-line;
`;
