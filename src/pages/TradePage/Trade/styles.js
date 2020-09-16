import styled, {keyframes} from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 50px;
  } ;
`;

export const Card = styled.form`
  width: 350px;
  height: 220px;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.secondaryLight};
  border: 1px solid ${(props) => props.theme.colors.secondaryDark};
  padding: 15px;
  border-radius: 3px;
  @media (max-width: 768px) {
    width: 90%;
  } ;
`;

export const User = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.large};
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  display: flex;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSizes.large};
  margin-bottom: 10px;
`;

export const Label = styled.span`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 40px;
  padding: 2px;
  margin-bottom: 2px;
  border-radius: 3px;
  border: 1px solid ${(props) => props.theme.colors.secondaryDark};
  :focus {
    border: 1px solid ${(props) => props.theme.colors.primaryDark};
  }
`;

export const EvaluateColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Result = styled.span`
  font-size: 1.6em;
  display: flex;
  justify-content: center;
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
  @media(min-width: 768px){
    margin-top: 5px;
  }
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

export const Text = styled.span`
  display: flex;
  justify-content: center;
`;