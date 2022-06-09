import React from "react";
import { Button } from "react-bootstrap";
import ShowPage from "../components/ShowPage";
import "../styles/loginBtn.css";

const LoginView: React.FC = () => {
  return (
    <div className="login-view">
      <Button
        className="btn-login hvr-buzz"
        variant="light"
        onClick={() => ShowPage(".btn-login")}
      >
        로그인
      </Button>
    </div>
  );
};

export default LoginView;
