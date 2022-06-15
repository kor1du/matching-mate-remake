import React from "react";
import { Link } from "react-router-dom";

const NavMenus: React.FC = () => {
  return (
    <div className="nav-login">
      <Link to="/login">로그인</Link>
    </div>
  );
};
export default NavMenus;
