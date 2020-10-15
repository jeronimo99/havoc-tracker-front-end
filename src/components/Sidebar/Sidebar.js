import React from "react";
import { Wrapper, Logo, Link, Panel } from "./styles";

const Sidebar = ({ onCloseSidebar }) => {
  return (
    <>
      <Panel onClick={onCloseSidebar} />
      <Wrapper>
        <Logo to={"/"} onClick={onCloseSidebar}>
          Havoc Tracker
        </Logo>
        <Link to={"/add-survivor"} onClick={onCloseSidebar}>
          Add Survivor
        </Link>
        <Link to={"/survivors"} onClick={onCloseSidebar}>
          List Survivors
        </Link>
        <Link to={"/update-location"} onClick={onCloseSidebar}>
          Update Location
        </Link>
        <Link to={"/trade"} onClick={onCloseSidebar}>
          Trade Items
        </Link>
        <Link to={"/flag-infected"} onClick={onCloseSidebar}>
          Flag Infected
        </Link>
        <Link to={"/reports"} onClick={onCloseSidebar}>
          Reports
        </Link>
      </Wrapper>
    </>
  );
};

export default Sidebar;
