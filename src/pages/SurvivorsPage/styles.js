import styled, {keyframes} from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  padding: 50px;
  grid-gap: 20px 30px;
  justify-content: space-between;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 10px;
  flex: 0 1 300px;
  height: 150px;
  background: ${props => props.theme.colors.secondary};
  border: 1px solid ${props => props.theme.colors.secondaryDark};
  color: ${props => props.theme.fonts.primary};
  border-radius: 3px;
`;

export const Name = styled.h3`
  font-size: ${props => props.theme.fontSizes.large};
`;

export const Line = styled.div`
  display: flex;
`;

export const Age = styled.span`
  font-size: ${props => props.theme.fontSizes.medium};
`;

export const Gender = styled.span`
  font-size: ${props => props.theme.fontSizes.medium};
  margin-left: auto;
`;

export const Location = styled.span`
  align-self: flex-end;
  font-size: ${props => props.theme.fontSizes.medium};
`;

export const Infected = styled.span`
  align-self: flex-end;
  font-size: ${props => props.theme.fontSizes.medium};
  color: ${props => props.theme.fonts.error};
  margin-left: auto;
`;

export const NotInfected = styled(Infected)`
  color: ${props => props.theme.colors.primaryLight};
`;

export const ItemLine = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Item = styled.span`
  font-size: ${props => props.theme.fontSizes.small};
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