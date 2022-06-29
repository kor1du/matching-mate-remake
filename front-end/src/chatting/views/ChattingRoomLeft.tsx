import React from "react";
import { ChattingRoomMemberList } from "../components/GetChattingRoom";
import Crown from "../images/crown.png";
import ModalMemberProfile from "./ModalMemberProfile";

interface ChattingRoomLeftProps {
  member: ChattingRoomMemberList;
}

const ChattingRoomLeft: React.FC<ChattingRoomLeftProps> = ({ member }) => {
  return (
    <div className="item">
      <ModalMemberProfile member={member}></ModalMemberProfile>
      <span>{member.nickname}</span>
      {member.priority === 1 ? <img src={Crown} alt="img-host" /> : null}
    </div>
  );
};

export default ChattingRoomLeft;
