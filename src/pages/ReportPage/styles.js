import styled, {keyframes} from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Card = styled.form`
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background: ${(props) => props.theme.colors.secondaryLight};
  border: 1px solid ${(props) => props.theme.colors.secondaryDark};
  padding: 10px;
  border-radius: 3px;
  @media(max-width: 768px){
    width: 90%;
  };
`;

export const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes.huge};
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.span`
  font-size: ${props => props.theme.fontSizes.large};
  margin-right: 5px;
`;

export const Data = styled.span`
  background: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primaryDark};
  font-size: ${props => props.theme.fontSizes.large};
  padding: 0 5px;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Loader = styled.div`
  border: 6px solid ${props => props.theme.colors.background};
  border-top: 6px solid ${props => props.theme.colors.secondary};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1.0s linear infinite;
`;