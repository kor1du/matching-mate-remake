import React, { useState } from "react";
import NavLogo from "./views/NavLogo";
import NavLogin from "./views/NavLogin";
import "./styles/nav.css";
import IsLogin from "../login/components/IsLogin";
import NavProfile from "./views/NavProfile";

const Nav: React.FC = () => {
  return (
    <div className="nav">
      <NavLogo></NavLogo>
      {IsLogin() === true ? (
        <>
          <NavProfile></NavProfile>
        </>
      ) : (
        <>
          <NavLogin></NavLogin>
        </>
      )}
    </div>
  );
};

export default Nav;
