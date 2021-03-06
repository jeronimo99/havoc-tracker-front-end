import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  height: 100vh;
  width: 300px;
  background: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  border-right: 1px solid ${props => props.theme.colors.primaryDark};
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Logo = styled(NavLink)`
  display: flex;
  justify-content: center;
  padding: 30px;
  color: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.huge};
`;

export const Link = styled(NavLink)`
  border-top: 1px solid ${props => props.theme.colors.primaryDark};
  color: ${props => props.theme.fonts.primary};
  padding: 20px;
  display: flex;
  justify-content: center;
  transition: 0.2s;
  :hover, &.active {
    background: ${props => props.theme.colors.primaryLight};
  }
  :last-child {
    border-bottom: 1px solid ${props => props.theme.colors.primaryDark};
  }
`;

export const Panel = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  height: 100vh;
  width: 100vw;

  background: rgba(100, 100, 100, 0.8);
  @media (min-width: 768px) {
    display: none;
  }
`;