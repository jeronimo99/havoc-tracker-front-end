import React from "react";
import { Wrapper, Link, LastLink } from "./styles";

const Sidebar = () => {
  return (
    <Wrapper>
      <Link to={"add-survivor"}>Add Survivor</Link>
      <LastLink to={"survivors"}>Survivors</LastLink>
    </Wrapper>
  );
};

export default Sidebar;
