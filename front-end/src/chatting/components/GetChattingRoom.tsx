import axios from "axios";
import { Message } from "../views/Messages";

export interface ChattingRoomMemberList {
  chattingMemberId: number;
  memberId: number;
  nickname: string;
  profileImgAddress: string;
  avgSkillPoint: number | null;
  avgMannerPoint: number | null;
  priority: number;
  ready: boolean;
}

export interface ChattingRoomInterface {
  id: number;
  postMemberId: number;
  place: string;
  matchingDate: string;
  matchingTime: string;
  myMemberId: number;
  chattingMemberId: number;
  numberOfPeople: number;
  maxNumberOfPeople: number;
  readMessageList: Array<Message>;
  readMemberList: Array<ChattingRoomMemberList>;
  isCompleted: number;
}

export default function GetChattingRoom(roomId: any): Promise<object> {
  return getData(roomId);
}

function getData(roomId: any): Promise<object> {
  const data = axios
    .get(`https://api.matching-mate.com/chat/in/${roomId}`, {
      headers: {
        Authorization: `bearer ${sessionStorage.getItem("accessToken")}`,
      },
    })
    .then((res) => {
      return res.data.data;
    });

  return data;
}
