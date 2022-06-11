import axios from "axios";
import { User } from "../views/SignupPage";

export default function Signup(user: User): Promise<boolean> {
  const postResult = postSignup(user);
  const signupResult = getData(postResult);
  return signupResult;
}

/* 서버에 회원가입 요청 */
function postSignup(user: User): Promise<Object> {
  return axios.post("http://kor1du.gonetis.com:8080/signUp", user);
}

/* 서버에서 받아온 회원가입 결과를 넘기는 함수 */
function getData(promise: Promise<Object>): Promise<boolean> {
  const result = promise
    .then(() => {
      alert("회원가입이 완료되었습니다!");
      return true;
    })
    .catch(() => {
      alert("회원가입에 실패하였습니다. 다시 시도해주세요.");
      return false;
    });
  return result;
}
