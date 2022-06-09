import { Button } from "react-bootstrap";
import "../styles/loginView.css";

export default function LoginView() {
  return (
    <div className="login-view">
      <Button className="btn-login hvr-buzz" variant="light">
        로그인
      </Button>
    </div>
  );
}
