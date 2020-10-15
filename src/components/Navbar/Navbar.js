import React from "react";
import { Wrapper, Logo, Link } from "./styles";

const Navbar = () => {
  return (
    <Wrapper>
      <Logo to={"/"}>Havoc Tracker</Logo>
      <Link to={"/add-survivor"}>Add Survivor</Link>
      <Link to={"/survivors"}>List Survivors</Link>
      <Link to={"/update-location"}>Update Location</Link>
      <Link to={"/trade"}>Trade Items</Link>
      <Link to={"/flag-infected"}>Flag Infected</Link>
      <Link to={"/reports"}>Reports</Link>
    </Wrapper>
  );
};

export default Navbar;
