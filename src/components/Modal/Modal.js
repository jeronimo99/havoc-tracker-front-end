import React from "react";
import { Wrapper, Panel, Content, ButtonGroup, Title, Button } from "./styles";

const Modal = ({children, onCloseModal}) => {
  return (
    <Wrapper>
      <Panel/>
      <Content>
        <Title>{children}</Title>
        <ButtonGroup>
          <Button onClick={onCloseModal}>OK</Button>
        </ButtonGroup>
      </Content>
    </Wrapper>
  );
};

export default Modal;
