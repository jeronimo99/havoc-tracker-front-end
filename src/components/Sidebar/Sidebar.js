import React from "react";
import { Wrapper, Link } from "./styles";

const Sidebar = ({ menu }) => {
  return (
    <Wrapper>
      {menu.map((link) => (
        <Link key={Math.random()} to={link.url}>
          {link.title}
        </Link>
      ))}
    </Wrapper>
  );
};

export default Sidebar;
