import styled, {keyframes} from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Title = styled.h2`
  font-size: ${props => props.theme.fontSizes.huge};
`;

export const Form = styled.form`
  width: 500px;
  height: 280px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background: ${(props) => props.theme.colors.secondaryLight};
  border: 1px solid ${(props) => props.theme.colors.secondaryDark};
  padding: 15px;
  border-radius: 3px;
  @media(max-width: 768px){
    width: 90%;
  };
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export const Input = styled.input`
  height: 35px;
  width: 70%;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid ${(props) => props.theme.colors.secondaryDark};
  :focus {
    border: 1px solid ${(props) => props.theme.colors.primaryDark};
  }
`;

export const Button = styled.button`
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  font-size: 1em;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  background: ${props => props.theme.colors.secondaryLight};
  transition: 0.2s;
  :hover {
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.fonts.secondary};
    border: 1px solid ${(props) => props.theme.colors.secondaryDark};
  }
`;

export const Error = styled.span`
  color: ${(props) => props.theme.fonts.error};
  font-size: ${props => props.theme.fontSizes.small};
  height: 10px;
  display: flex;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  border: 6px solid ${props => props.theme.colors.background};
  border-top: 6px solid ${props => props.theme.colors.secondary};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1.0s linear infinite;
`;