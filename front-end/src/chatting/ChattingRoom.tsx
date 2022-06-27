import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import GetChattingRoom, { ChattingRoomInterface } from "./components/GetChattingRoom";
import ChattingRoomLeft from "./views/ChattingRoomLeft";
import "./styles/chattingRoom.css";
import ChattingRoomRight from "./views/ChattingRoomRight";
import ToggleActive from "./components/ToggleActive";
import Bars from "./images/bars-solid.svg";

const ChattingRoom: React.FC = () => {
  const { state } = useLocation();
  const [chattingRoom, setChattingRoom] = useState<ChattingRoomInterface>({
    id: 0,
    postMemberId: 0,
    place: "",
    matchingDate: "",
    matchingTime: "",
    myMemberId: 0,
    chattingMemberId: 0,
    numberOfPeople: 0,
    maxNumberOfPeople: 0,
    readMessageList: [],
    readMemberList: [],
    isCompleted: 0,
  });

  useEffect(() => {
    GetChattingRoom(state).then((res: any) => {
      setChattingRoom(res);
    });
  }, [state]);

  return (
    <div className="chatting-room">
      <img
        src={Bars}
        alt="bars"
        className="img-bar"
        onClick={(e) => {
          e.preventDefault();
          ToggleActive();
        }}
      />
      <div className="left">
        {chattingRoom.readMemberList.map((item) => {
          return <ChattingRoomLeft key={item.memberId} member={item}></ChattingRoomLeft>;
        })}
      </div>

      <ChattingRoomRight roomID={state} oldMessages={chattingRoom.readMessageList}></ChattingRoomRight>
    </div>
  );
};

export default ChattingRoom;
