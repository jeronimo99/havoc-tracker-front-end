import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.secondary};
  border: 1px solid ${(props) => props.theme.colors.secondaryDark};
  border-radius: 3px;
  padding: 30px;
`;

export const Title = styled.h1`
  font-size: ${props => props.theme.fontSizes.huge};
`;

export const Subtitle = styled.h2`
  font-size: ${props => props.theme.fontSizes.medium};
`;