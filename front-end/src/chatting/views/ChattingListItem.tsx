import { Link, useNavigate } from "react-router-dom";
import { ChattingListInterface } from "../components/GetChattingList";

interface itemProps {
  item: ChattingListInterface;
}
const Item: React.FC<itemProps> = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div
      className="chatting-list-item"
      onClick={(e) => {
        e.preventDefault();
        window.location.replace("/chatting/room");
        navigate("/chatting/room", { state: item.id });
      }}
    >
      <img src={item.categoryImgAddress} alt="" />
      <div className="title">{item.matchingPostName}</div>
      <div className="number-people">
        {item.numberOfPeople} / {item.maxNumberOfPeople}
      </div>
    </div>
  );
};

export default Item;
