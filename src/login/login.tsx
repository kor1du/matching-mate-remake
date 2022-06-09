import React from "react";
import "./styles/login.css";
import LoginView from "./views/LoginBtn";
import SignupView from "./views/SignupBtn";

const Login: React.FC = () => {
  return (
    <div className="login">
      <LoginView></LoginView>
      <SignupView></SignupView>
    </div>
  );
};

export default Login;
