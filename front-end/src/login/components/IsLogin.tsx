export default function IsLogin() {
  return checkToken();
}

/* 로그인시 발행되는 토큰이 있는지 확인하는 함수 */
function checkToken(): boolean {
  if (sessionStorage.getItem("accessToken")) return true;
  return false;
}
