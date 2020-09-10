import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background: ${props => props.theme.colors.background};
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Card = styled(Link)`
  background: gray;
  flex: 0 0 70px;
  width: 300px;
  margin: 5px;
  border-radius: 3px;
  background: ${props => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primaryDark};
  color: ${props => props.theme.fonts.primary};
  font-size: ${props => props.theme.fontSizes.medium};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 0.2s;
  :hover{
    background: ${props => props.theme.colors.primaryLight};
  }
`;