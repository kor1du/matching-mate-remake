import React from "react";
import { Message } from "./Messages";
interface ChattingRoomRightProps {
    roomID: number | any;
    oldMessages: Array<Message>;
}
declare const ChattingRoomRight: React.FC<ChattingRoomRightProps>;
export default ChattingRoomRight;
