import React from "react";
import { Button } from "react-bootstrap";
import ShowPage from "../components/ShowPage";
import "../styles/signupBtn.css";

const SignupView: React.FC = () => {
  return (
    <Button
      className="btn-signup hvr-buzz"
      variant="dark"
      onClick={() => ShowPage(".btn-signup", ".signup-page")}
    >
      회원가입
    </Button>
  );
};

export default SignupView;
