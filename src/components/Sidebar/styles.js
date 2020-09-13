import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

export const Wrapper = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 300px;
  background: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  border-right: 1px solid ${props => props.theme.colors.primaryDark};
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Link = styled(NavLink)`
  border-top: 1px solid ${props => props.theme.colors.primaryDark};
  color: ${props => props.theme.fonts.primary};
  padding: 10px;
  display: flex;
  justify-content: center;
  transition: 0.2s;
  :hover {
    background: ${props => props.theme.colors.primaryLight};
  }
`;

export const LastLink = styled(Link)`
  border-bottom: 1px solid ${props => props.theme.colors.primaryDark};
`;