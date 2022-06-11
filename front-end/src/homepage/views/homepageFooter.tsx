import React from "react";
import "../styles/homepageFooter.css";
import Map from "../images/map.gif";
import Chat from "../images/chat.gif";
import Medal from "../images/medal.gif";
import Muscle from "../images/muscle.gif";
import Together from "../images/together.gif";

const HomepageFooter: React.FC = () => {
  return (
    <div className="footer">
      <p className="title">운동메이트를 통해</p>

      <div className="introduce" data-aos="fade-left">
        <img src={Map} alt="icon-map" />
        <div className="catchphrase">
          <p className="catchphrase-title">실시간 위치 조회</p>
          <p className="catchphrase-content">
            근처의 다른 운동메이트를 찾아보세요!
          </p>
        </div>
      </div>

      <div className="introduce" data-aos="fade-right">
        <div className="catchphrase">
          <p className="catchphrase-title">자유로운 소통</p>
          <p className="catchphrase-content">
            채팅메이트의 채팅기능을 사용, 운동메이트들과 소통해보세요!
          </p>
        </div>
        <img src={Chat} alt="icon-chat" />
      </div>

      <div className="introduce" data-aos="fade-left">
        <img src={Medal} alt="icon-medal" />
        <div className="catchphrase">
          <p className="catchphrase-title">뱃지 시스템</p>
          <p className="catchphrase-content">
            다른 운동메이트의 실력을 파악해보세요!
          </p>
        </div>
      </div>

      <div className="introduce" data-aos="fade-right">
        <div className="catchphrase">
          <p className="catchphrase-title">체력 및 근력 향상</p>
          <p className="catchphrase-content">
            꾸준한 운동으로 건강을 챙겨보는건 어떨까요?
          </p>
        </div>
        <img src={Muscle} alt="icon-muscle" />
      </div>

      <div className="introduce" data-aos="fade-left">
        <img src={Together} alt="icon-together" />
        <div className="catchphrase">
          <p className="catchphrase-title">함께 할때 더 즐거운</p>
          <p className="catchphrase-content">
            함께 운동할때 더 커지는 운동효과, 알고 계셨나요?
          </p>
        </div>
      </div>
    </div>
  );
};
export default HomepageFooter;
