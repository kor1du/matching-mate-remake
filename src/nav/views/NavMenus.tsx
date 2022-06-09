import React from "react";
import { Link } from "react-router-dom";
import "../styles/navMenus.css";

export default function NavMenus() {
  return (
    <div className="menus">
      <Link to="/login">로그인</Link>
    </div>
  );
}
