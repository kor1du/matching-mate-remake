import "./styles/login.css";
import LoginView from "./views/LoginView";
import SignupView from "./views/SignupView";

export default function Login() {
  return (
    <div className="login">
      <LoginView></LoginView>
      <SignupView></SignupView>
    </div>
  );
}
