import React from "react";
import NavLogo from "./views/NavLogo";
import NavMenus from "./views/NavMenus";
import "./styles/nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <NavLogo></NavLogo>
      <NavMenus></NavMenus>
    </div>
  );
}
