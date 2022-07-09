/// <reference types="react" />
export interface Message {
    chattingMessageId: number;
    memberId: number;
    message: string;
    nickname: string;
    profileImgAddress: string;
    registerDatetime: string;
}
interface MessagesProps {
    message: Message;
}
declare const Messages: React.FC<MessagesProps>;
export default Messages;
