import styled from 'styled-components';
import {GiHamburgerMenu} from 'react-icons/gi';

export const Main = styled.main`
  margin-left: 300px;
  min-height: 100vh;
  background: ${props => props.theme.colors.background};
  @media (max-width: 768px) {
    margin-left: 0;
  }
`;

export const Hamburger = styled(GiHamburgerMenu)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 10px;
  cursor: pointer;
  background: ${props => props.theme.colors.primary};
  border-radius: 3px;
  height: 50px;
  width: 50px;
  @media(min-width: 768px) {
    display: none;
  }
`;