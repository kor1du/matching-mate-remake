import SockJS from "sockjs-client";
import Stomp from "stompjs";
import GetChattingRoom from "./GetChattingRoom";

const token: string | null = "bearer " + sessionStorage.getItem("accessToken");
let stomp_client: any;
let socket = new SockJS("https://api.matching-mate.com/stomp/chat");
stomp_client = Stomp.over(socket);
// stomp_client.debug = () => {};

export default function Connect(roomID: number, setMessages: any, scrollRef: any): void {
  stomp_client.connect({}, function () {
    subscribe(roomID, setMessages, scrollRef).then(() => {
      enter(roomID);
    });
  });
}

export function Send(roomID: number, message: string): void {
  stomp_client.send("/pub/chat/message", {}, JSON.stringify({ roomId: roomID, token: token, message: message }));
}

function subscribe(roomID: number, setMessages: any, scrollRef: any): Promise<Object> {
  return new Promise((resolve, reject) => {
    stomp_client.subscribe("/sub/chat/in/" + roomID, (response: any) => {
      GetChattingRoom(roomID)
        .then((res: any) => {
          setMessages(res.readMessageList);
          console.log(res);
        })
        .then(() => {
          setTimeout(() => {
            scrollRef.current?.scrollIntoView();
          }, 250);
        });
    });
    resolve(true);
  });
}

function enter(roomID: number): void {
  stomp_client.send("/pub/chat/enter", {}, JSON.stringify({ roomId: roomID, token: token }));
}
