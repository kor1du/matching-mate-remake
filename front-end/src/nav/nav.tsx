import React from "react";
import NavLogo from "./views/NavLogo";
import NavMenus from "./views/NavMenus";
import "./styles/nav.css";

const Nav: React.FC = () => {
  return (
    <div className="nav">
      <NavLogo></NavLogo>
      <NavMenus></NavMenus>
    </div>
  );
};

export default Nav;
