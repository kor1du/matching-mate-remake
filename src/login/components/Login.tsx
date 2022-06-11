import axios from "axios";

/* User 인터페이스 */
export interface User {
  userId: string;
  userPw: string;
}

interface LoginData {
  nickname: string;
  profileImgAddress: string;
  role: string;
  tokenDTO: {
    accessToken: string;
    grantType: string;
    refreshToken: string;
  };
}

/* 로그인 함수 */
export default function Login(user: User): Promise<boolean> {
  const loginRequest: Promise<Object> = requestLogin(user);
  const loginResult: Promise<boolean> = saveDataToSession(loginRequest);
  return loginResult;
}

/* User정보를 받아 서버에 로그인 요청후 데이터를 받아오는 함수 */
function requestLogin(user: User): Promise<Object> {
  return axios.post("http://localhost:8080/login", user);
}

/* 받아온 User데이터에서 필요한 정보를 세션에 저장하고 로그인 결과를 리턴하는 함수 */
function saveDataToSession(result: Promise<Object>): Promise<boolean> {
  const isSuccess = result
    .then((res: any) => {
      const data: LoginData = res.data.data;

      sessionStorage.setItem("nickname", data.nickname);
      sessionStorage.setItem("profileImgAddress", data.profileImgAddress);
      sessionStorage.setItem("role", data.role);
      sessionStorage.setItem("accessToken", data.tokenDTO.accessToken);
      sessionStorage.setItem("grantType", data.tokenDTO.grantType);
      sessionStorage.setItem("refreshToken", data.tokenDTO.refreshToken);

      return true;
    })
    .catch(() => {
      alert("아이디와 비밀번호를 확인해주세요!");
      return false;
    });

  return isSuccess;
}
