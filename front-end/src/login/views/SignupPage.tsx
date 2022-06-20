import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import ShowPage from "../components/ShowPage";
import "../styles/signupPage.css";
import AddressModal from "../../address/ModalAddress";
import CheckIDModal from "./ModalCheckID";
import EmoticonParty from "../images/emoticon-party.png";
import CheckNicknameModal from "./ModalCheckNickname";
import Signup from "../components/Signup";

export interface User {
  userId: string;
  userPw: string;
  name: string;
  nickname: string;
  address: string;
  birthday: string;
  phone: string;
  sex: string;
}

const SignupPage: React.FC = () => {
  const [user, setUser] = useState<User>({
    userId: "",
    userPw: "",
    name: "",
    nickname: "",
    address: "",
    birthday: "",
    phone: "",
    sex: "",
  });

  useEffect(() => {}, [user]);

  return (
    <div className="signup-page">
      <div className="close">
        <Button
          className="btn-close"
          onClick={(e) => {
            e.preventDefault();
            ShowPage(".btn-signup", ".signup-page");
          }}
        ></Button>
      </div>
      <div className="greeting">
        <p>운동메이트에 오신걸 환영해요!</p>
        <img src={EmoticonParty} alt="emoticon-heart-face" />
      </div>
      <form>
        <p className="label">ID</p>
        <div className="id">
          <input
            type="text"
            value={user.userId}
            data-date-format="yyyy-mm-dd"
            placeholder="ID를 입력해주세요"
            readOnly
          />
          <CheckIDModal user={user} setUser={setUser}></CheckIDModal>
        </div>
        <p className="label">비밀번호</p>
        <div className="password">
          <input
            type="password"
            className="input-100"
            value={user.userPw}
            placeholder="비밀번호를 입력해주세요"
            onChange={(e) => {
              e.preventDefault();
              setUser({
                ...user,
                userPw: e.target.value,
              });
            }}
          />
        </div>
        <p className="label">주소</p>
        <div className="address">
          <input
            type="text"
            readOnly
            value={user.address}
            placeholder="주소를 입력해주세요"
          />
          <AddressModal user={user} setUser={setUser}></AddressModal>
        </div>
        <p className="label">이름</p>
        <div className="password">
          <input
            type="text"
            className="input-100"
            value={user.name}
            placeholder="이름을 입력해주세요"
            onChange={(e) => {
              e.preventDefault();
              setUser({
                ...user,
                name: e.target.value,
              });
            }}
          />
        </div>
        <p className="label">별명</p>
        <div className="nickname">
          <input
            type="text"
            value={user.nickname}
            placeholder="별명을 입력해주세요"
            onChange={(e) => {
              e.preventDefault();
              setUser({
                ...user,
                nickname: e.target.value,
              });
            }}
            readOnly
          />
          <CheckNicknameModal
            user={user}
            setUser={setUser}
          ></CheckNicknameModal>
        </div>
        <p className="label">생일</p>
        <div className="birthday">
          <input
            type="date"
            className="input-100 input-date"
            value={user.birthday}
            placeholder="생일을 입력해주세요"
            onChange={(e) => {
              e.preventDefault();

              setUser({
                ...user,
                birthday: e.target.value,
              });
            }}
          />
        </div>
        <p className="label">연락처</p>
        <div className="phone">
          <input
            type="text"
            className="input-100"
            value={user.phone}
            placeholder="연락처를 입력해주세요"
            onChange={(e) => {
              e.preventDefault();

              setUser({
                ...user,
                phone: e.target.value,
              });
            }}
          />
        </div>
        <p className="label">성별</p>
        <div className="gender">
          <div className="box-radio">
            <input type="radio" name="radio-gender" value="남자" />
            남자
          </div>
          <div className="box-radio">
            <input type="radio" name="radio-gender" value="여자" />
            여자
          </div>
        </div>
      </form>
      <div className="box-btn-signup">
        <Button
          className="btn-signup"
          variant="dark"
          onClick={async (e: any) => {
            e.preventDefault();
            const signupResult = await Signup(user);
            if (signupResult) {
              ShowPage(".btn-signup", ".signup-page");
              setUser({
                userId: "",
                userPw: "",
                name: "",
                nickname: "",
                address: "",
                birthday: "",
                phone: "",
                sex: "",
              });
            }
          }}
        >
          회원가입
        </Button>
      </div>
    </div>
  );
};

export default SignupPage;
