import styled from 'styled-components';

export const Main = styled.main`
  margin-left: 300px;
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;