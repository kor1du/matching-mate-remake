import { Button } from "react-bootstrap";
import "../styles/signupView.css";

export default function SignupView() {
  return (
    <div className="signup-view">
      <Button className="btn-signup hvr-buzz" variant="dark">
        회원가입
      </Button>
    </div>
  );
}
