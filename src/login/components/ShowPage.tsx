export default function ShowPage(targetBtn: string, targetPage: string): void {
  hideBtn(targetBtn);

  showTargetPage(targetPage);
  hideNonTargetPage(targetPage);

  activeLogin();
  activeSignup();
}

/* 클릭된 버튼을 안보이게 하는 함수 */
function hideBtn(targetBtn: string): void {
  const targetClass: any = document.querySelector(targetBtn);
  targetClass.classList.toggle("active");
}

/* 클릭된 버튼에 맞는 페이지를 보여주는 함수 */
function showTargetPage(targetPage: string): void {
  const targetClass: any = document.querySelector(targetPage);
  targetClass.classList.toggle("active");
}

/* 클릭되지않은(화면에서 사라져야할) 페이지를 안보이게 하는 함수 */
function hideNonTargetPage(targetPage: string): void {
  let targetClass: any;

  if (targetPage.includes("login-page"))
    targetClass = document.querySelector(".signup");
  else {
    targetClass = document.querySelector(".login");
  }
  if (targetClass.style.display === "none") targetClass.style.display = "flex";
  else targetClass.style.display = "none";
}

/* Login 클래스리스트에 Active추가 */
function activeLogin(): void {
  const targetClass: any = document.querySelector(".login-signup .login");
  targetClass.classList.toggle("active");
}

/* Signup 클래스리스트에 Active 추가 */
function activeSignup(): void {
  const targetClass: any = document.querySelector(".login-signup .signup");
  targetClass.classList.toggle("active");
}
