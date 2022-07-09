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
export default function GetChattingRoom(roomId: any): Promise<object>;
