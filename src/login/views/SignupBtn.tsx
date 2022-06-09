import React from "react";
import { Button } from "react-bootstrap";
import ShowPage from "../components/ShowPage";
import "../styles/signupBtn.css";

const SignupView: React.FC = () => {
  return (
    <div className="signup-view">
      <Button
        className="btn-signup hvr-buzz"
        variant="dark"
        onClick={() => ShowPage(".btn-signup")}
      >
        회원가입
      </Button>
    </div>
  );
};

export default SignupView;
