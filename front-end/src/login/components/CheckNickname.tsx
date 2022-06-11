import axios from "axios";
import { Dispatch, SetStateAction } from "react";
import { User } from "../views/SignupPage";

export default async function checkNickname(
  nickname: string,
  user: User,
  setUser: Dispatch<SetStateAction<User>>
) {
  const postResult: Promise<Object> = postNickname(nickname);
  const result: boolean = await getData(postResult);
  changeNickname(nickname, user, setUser, result);
}

/* ID 중복체크를 위해 서버에 아이디를 보내는 함수 */
function postNickname(nickname: string): Promise<Object> {
  return axios.post("http://kor1du.gonetis.com:8080/signUp/checkNickname", {
    nickname: nickname,
  });
}

/* 서버에서 중복검사한 결과를 넘기는 함수 */
function getData(promise: Promise<Object>): Promise<boolean> {
  const result = promise
    .then(() => {
      alert("사용가능한 닉네임 입니다.");
      return true;
    })
    .catch(() => {
      alert("중복된 닉네임입니다.");
      return false;
    });
  return result;
}

/* ID가 사용가능하다면 userId를 변경하고 아니면 초기화시키는 함수 */
function changeNickname(
  nickname: string,
  user: User,
  setUser: Dispatch<SetStateAction<User>>,
  result: boolean
): void {
  if (result)
    setUser({
      ...user,
      nickname: nickname,
    });
  else {
    setUser({
      ...user,
      nickname: "",
    });
  }
}
