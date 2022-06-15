import { useEffect, useState } from "react";
import GetMap from "../components/GetMap";

const Map: React.FC = () => {
  const [address, setAddress] = useState<string>("");

  useEffect(() => {
    GetMap(setAddress);
  }, []);

  return (
    <div className="map">
      <p className="greeting">
        {sessionStorage.getItem("nickname") !== null
          ? sessionStorage.getItem("nickname") + ""
          : "Guest"}
        님의 현재 위치는?
      </p>
      <p className="greeting address">{address}</p>
      <div id="map"></div>
      <p className="greeting">현재위치가 아니라면 마커를 이동해보세요!</p>
    </div>
  );
};

export default Map;
