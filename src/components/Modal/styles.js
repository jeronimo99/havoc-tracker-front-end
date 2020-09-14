import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Panel = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;

  background: rgba(100, 100, 100, 0.8);
`;

export const Content = styled.div`
  z-index: 3;

  height: 150px;
  width: 360px;
  border-radius: 5px;
  background: white;

  padding: 22px 15px 15px 15px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  border: 1px solid ${(props) => props.theme.colors.primary};
  @media(max-width: 768px){
    width: 70%;
  }
`;

export const Title = styled.span`
  color: var(--darkGray);
  font-size: 1em;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  height: 40px;
  width: 80px;
  font-size: 0.9em;
  border-radius: 3px;
  margin-left: 5px;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.primary};
  background: ${props => props.theme.colors.primaryLight};
  transition: 0.2s;
  :hover {
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.fonts.primary};
    border: 1px solid ${(props) => props.theme.colors.primaryDark};
  }
`;