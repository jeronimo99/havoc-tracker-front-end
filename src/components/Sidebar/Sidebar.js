import React from "react";
import { Wrapper, Link } from "./styles";

const Sidebar = () => {
  return (
    <Wrapper>
      <Link to={"/add-survivor"}>Add Survivor</Link>
      <Link to={"/survivors"}>List Survivors</Link>
      <Link to={"/update-location"}>Update Location</Link>
      <Link to={"/trade"}>Trade Items</Link>
      <Link to={"/flag-infected"}>Flag Infected</Link>
      <Link to={"/reports"}>Reports</Link>
    </Wrapper>
  );
};

export default Sidebar;
