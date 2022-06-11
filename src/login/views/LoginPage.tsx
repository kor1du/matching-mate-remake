import React, { useState } from "react";
import "../styles/loginPage.css";
import WinkingEmoticon from "../images/emoticon-winking.png";
import { Button } from "react-bootstrap";
import Login, { User } from "../components/Login";
import { useNavigate } from "react-router-dom";
import ShowPage from "../components/ShowPage";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User>({
    userId: "",
    userPw: "",
  });

  const onChangeID = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUser({
      ...user,
      userId: e.target.value,
    });
  };

  const onChangePW = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setUser({
      ...user,
      userPw: e.target.value,
    });
  };

  return (
    <div className="login-page">
      <div className="close">
        <Button
          className="btn-close"
          onClick={(e) => {
            e.preventDefault();
            ShowPage(".btn-login", ".login-page");
          }}
        ></Button>
      </div>
      <div className="greeting">
        <span>운동메이트에 오신걸 환영해요!</span>
        <img src={WinkingEmoticon} alt="emoticon-winking" />
      </div>
      <div className="id">
        <p>ID</p>
        <input
          type="text"
          placeholder="ID를 입력해주세요"
          onChange={onChangeID}
        />
      </div>
      <div className="password">
        <p>Password</p>
        <input
          type="password"
          placeholder="Password를 입력해주세요"
          onChange={onChangePW}
        />
      </div>
      <Button
        variant="primary"
        className="btn-login"
        onClick={async (e: any) => {
          e.preventDefault();
          if (await Login(user)) navigate(-1);
        }}
      >
        로그인
      </Button>
    </div>
  );
};

export default LoginPage;
