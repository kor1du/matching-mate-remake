import { useEffect } from "react";
import GetCurrentMap from "../components/GetCurrentMap";

const Map: React.FC = () => {
  useEffect(() => {
    GetCurrentMap();
  }, []);

  return (
    <div className="kakao-map">
      <p className="greeting">
        {sessionStorage.getItem("nickname")}님의 현재 위치는?
      </p>
      <div id="map"></div>
      <p className="greeting">현재위치가 아니라면 마커를 이동해보세요!</p>
    </div>
  );
};

export default Map;
