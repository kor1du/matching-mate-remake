import React from "react";
import { Link } from "react-router-dom";
import "../styles/navMenus.css";

const NavMenus: React.FC = () => {
  return (
    <div className="menus">
      <Link to="/login">로그인</Link>
    </div>
  );
};
export default NavMenus;
