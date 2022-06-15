import Map from "./views/Map";
import "./styles/matchingPost.css";
import Posts from "./views/Posts";
import Categorys from "./views/Categorys";

const matchingPost: React.FC = () => {
  return (
    <div className="matching-post">
      <Map></Map>
      <Categorys></Categorys>
      <Posts></Posts>
    </div>
  );
};

export default matchingPost;
