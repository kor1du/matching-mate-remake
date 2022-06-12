import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../styles/homepageHeader.css";
import "../styles/homepageHeaderAnimations.css";

const HomepageHeader: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <p className="catchphrase">혼자서만 하는 운동, 지겹지는 않으신가요?</p>
      <p className="title">운동메이트</p>
      <div className="btns">
        <Button
          variant="danger"
          className="find-mate"
          onClick={(e) => {
            e.preventDefault();
            navigate("/matching/post");
          }}
        >
          운동메이트 찾기
        </Button>
        <Button className="recruit-mate">운동메이트 모집하기</Button>
      </div>
    </div>
  );
};

export default HomepageHeader;
