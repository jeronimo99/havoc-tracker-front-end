import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.background};
`;

export const Form = styled.form`
  width: 700px;
  display: flex;
  background: ${(props) => props.theme.colors.secondaryLight};
  border: 1px solid ${(props) => props.theme.colors.secondaryDark};
  padding: 15px;
  border-radius: 3px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InfoColumn = styled.div`
  flex: 1 1 500px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex: 1;
  }
`;

export const InventoryColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  @media (max-width: 768px) {
    margin-left: 0;
  }
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
  border: 1px solid ${(props) => props.theme.colors.secondaryDark};
  :focus {
    border: 1px solid ${(props) => props.theme.colors.primaryDark};
  }
`;

export const SelectInput = styled.select`
  border: black;
  height: 30px;
  border-radius: 3px;
  border: 1px solid ${(props) => props.theme.colors.secondaryDark};
  :focus {
    border: 1px solid ${(props) => props.theme.colors.primaryDark};
  }
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
  width: 100%;
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
  transition: 0.2s;
  :hover {
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.fonts.secondary};
    border: 1px solid ${(props) => props.theme.colors.secondaryDark};
  }
`;