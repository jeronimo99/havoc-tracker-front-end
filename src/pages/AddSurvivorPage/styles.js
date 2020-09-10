import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.background};
`;

export const Form = styled.div`
  flex: 0 0 300px;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primaryDark};
  padding: 15px;
  border-radius: 3px;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  font-size: ${props => props.theme.fontSizes.large};
  margin: 10px 0;
`;

export const Label = styled.label`
  margin-bottom: 3px;
`;

export const TextInput = styled.input`
  border: black;
  height: 30px;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid ${(props) => props.theme.colors.primaryDark};
`;

export const SelectInput = styled.select`
  border: black;
  height: 30px;
  border-radius: 3px;
  border: 1px solid ${(props) => props.theme.colors.primaryDark};
`;

export const Line = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Error = styled.span`
  color: ${(props) => props.theme.fonts.error};
  font-size: 0.7em;
  height: 5px;
  display: flex;
  justify-content: flex-end;
  font-weight: 500;
`;

export const CoordLabel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

export const CoordInput = styled(TextInput)`
  width: 50px;
`;

export const Subtitle = styled.h3`
  margin-top: 10px;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  height: 40px;
  width: 80px;
  margin-top: 12px;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  font-size: 1em;
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  background: ${props => props.theme.colors.secondaryLight};
  color: ${props => props.theme.fonts.secondaryLight};
  transition: 0.2s;
  :hover {
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.fonts.secondary};
    border: 1px solid ${(props) => props.theme.colors.secondaryDark};
  }
`;