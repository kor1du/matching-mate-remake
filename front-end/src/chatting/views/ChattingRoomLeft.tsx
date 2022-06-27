import React from "react";
import { ChattingRoomMemberList } from "../components/GetChattingRoom";
import Crown from "../images/crown.png";

interface ChattingRoomLeftProps {
  member: ChattingRoomMemberList;
}

const ChattingRoomLeft: React.FC<ChattingRoomLeftProps> = ({ member }) => {
  return (
    <div className="item">
      <img src={member.profileImgAddress} alt="img-member" />
      <span>{member.nickname}</span>
      {member.priority === 2 ? <img src={Crown} alt="img-host" /> : null}
    </div>
  );
};

export default ChattingRoomLeft;
