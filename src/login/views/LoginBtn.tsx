import React from "react";
import { Button } from "react-bootstrap";
import ShowPage from "../components/ShowPage";
import "../styles/loginBtn.css";

const LoginBtn: React.FC = () => {
  return (
    <Button
      className="btn-login hvr-buzz"
      variant="light"
      onClick={() => ShowPage(".btn-login", ".login-page")}
    >
      로그인
    </Button>
  );
};

export default LoginBtn;
