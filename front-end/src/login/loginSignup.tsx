import React from "react";
import "./loginSignup.css";
import LoginBtn from "./views/LoginBtn";
import LoginPage from "./views/LoginPage";
import SignupBtn from "./views/SignupBtn";
import SignupPage from "./views/SignupPage";

const Login: React.FC = () => {
  return (
    <div className="login-signup">
      <div className="login">
        <LoginBtn></LoginBtn>
        <LoginPage></LoginPage>
      </div>
      <div className="signup">
        <SignupBtn></SignupBtn>
        <SignupPage></SignupPage>
      </div>
    </div>
  );
};

export default Login;
