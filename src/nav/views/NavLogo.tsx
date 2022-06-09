import React from "react";
import { Link } from "react-router-dom";
import "../styles/navLogo.css";

export default function NavLogo() {
  return (
    <div className="logo">
      <Link to="/">운동메이트</Link>
    </div>
  );
}
