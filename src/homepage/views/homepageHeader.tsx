import { Button } from "react-bootstrap";
import "../styles/hompageHeader/homepageHeader.css";
import "../styles/hompageHeader/homepageHeaderAnimations.css";

export default function HomepageHeader() {
  return (
    <div className="header">
      <p className="catchphrase">혼자서만 하는 운동, 지겹지는 않으신가요?</p>
      <p className="title">운동메이트</p>
      <div className="btns">
        <Button variant="danger" className="find-mate">
          운동메이트 찾기
        </Button>
        <Button className="recruit-mate">운동메이트 모집하기</Button>
      </div>
    </div>
  );
}
