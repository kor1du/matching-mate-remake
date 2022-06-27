import React, { useEffect, useRef, useState } from "react";
import { Button } from "react-bootstrap";
import Chatting, { Send } from "../components/Chatting";
import Messages, { Message } from "./Messages";

interface ChattingRoomRightProps {
  roomID: number | any;
  oldMessages: Array<Message>;
}

const ChattingRoomRight: React.FC<ChattingRoomRightProps> = ({ roomID, oldMessages }) => {
  const [messages, setMessages] = useState<Array<Message>>([]);
  const [text, setText] = useState<string>("");
  const scrollRef: any = useRef();

  useEffect(() => {
    Chatting(roomID, setMessages, scrollRef);
    setMessages(oldMessages);
  }, [roomID, oldMessages]);
  Chatting(roomID, setMessages, scrollRef);
  return (
    <div className="right">
      <div className="messages">
        {messages.map((item) => {
          return <Messages key={item.chattingMessageId} message={item}></Messages>;
        })}
      </div>

      <div className="send">
        <input
          type="text"
          className="input-chat"
          onChange={(e) => {
            e.preventDefault();
            setText(e.target.value);
          }}
        />

        <Button
          onClick={() => {
            Send(roomID, text);
            const input: null | any = document.querySelector(".input-chat");
            input.value = "";
          }}
        >
          입력
        </Button>
        <div ref={scrollRef}></div>
      </div>
    </div>
  );
};

export default ChattingRoomRight;
