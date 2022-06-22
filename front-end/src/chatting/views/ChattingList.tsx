import { useEffect, useState } from "react";
import GetChattingList, { ChattingList } from "../components/GetChattingList";
import ChattingListItem from "./ChattingListItem";
import "../styles/chattingList.css";

const ChattingList: React.FC = () => {
  const [chattingList, setChattingList] = useState<Array<ChattingList>>([
    {
      id: 0,
      isCompleted: 0,
      matchingPostId: 0,
      matchingPostName: "",
      categoryImgAddress: "",
      maxNumberOfPeople: 0,
      modifiedDatetime: "",
      myChattingMemberId: 0,
      noReadChatCount: 0,
      numberOfPeople: 0,
      registerDatetime: "",
      roomNumberOfPeople: 0,
    },
  ]);

  useEffect(() => {
    GetChattingList().then((res: any) => {
      setChattingList(res);
    });
  }, []);

  return (
    <div className="chatting-list">
      {chattingList.map((item) => {
        return <ChattingListItem key={item.id} item={item}></ChattingListItem>;
      })}
    </div>
  );
};

export default ChattingList;
