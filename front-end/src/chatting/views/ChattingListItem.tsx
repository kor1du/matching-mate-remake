import { Link } from "react-router-dom";
import { ChattingList } from "../components/GetChattingList";

interface itemProps {
  item: ChattingList;
}
const item: React.FC<itemProps> = ({ item }) => {
  console.log(item);
  return (
    <Link to="/">
      <div className="chatting-list-item">
        <img src={item.categoryImgAddress} alt="" />
        <div className="title">{item.matchingPostName}</div>
        <div className="number-people">
          {item.numberOfPeople} / {item.maxNumberOfPeople}
        </div>
        <div className="count-chat">{item.noReadChatCount}</div>
      </div>
    </Link>
  );
};

export default item;
