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

const Messages: React.FC<MessagesProps> = ({ message }) => {
  return (
    <>
      {message.nickname === sessionStorage.getItem("nickname") ? (
        <div className="me item">
          <h1>{message.message}</h1>
          <img src={message.profileImgAddress} alt="" />
        </div>
      ) : (
        <div className="other item">
          <img src={message.profileImgAddress} alt="" />
          <h1>{message.message}</h1>
        </div>
      )}
    </>
  );
};

export default Messages;
