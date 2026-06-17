import styled from 'styled-components';

const PlainButtonStyled = styled.button`
  margin-bottom: 5px;
  padding: 12px 60px;
  border: none;
  border-radius: 35px;
  border: 2px solid rgba(255, 182, 193, 0.4);
  background-color: #ffb6c1;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  h3 {
    font-family: 'OngleipParkDahyeon';
    font-size: 24px;
    font-weight: normal;
    margin: 0;
    letter-spacing: 1px;
  }

  &:hover {
    background-color: #ffbcc8;
    transform: translateY(-2px);
  }
`;

function PlainButton(props) {
  return (
    <PlainButtonStyled onClick={props.onClick} type={props.type}>
      <h3>{props.name}</h3>
    </PlainButtonStyled>
  );
}

export default PlainButton;
