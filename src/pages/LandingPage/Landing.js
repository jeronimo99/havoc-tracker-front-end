import React from "react";
import { Wrapper, Menu, Card } from "./styles";

const Landing = ({ menu }) => {
  return (
    <Wrapper>
      <Menu>
        {menu.map(card => <Card key={Math.random()} to={card.url}>{card.title}</Card>)}
      </Menu>
    </Wrapper>
  );
};

export default Landing;
