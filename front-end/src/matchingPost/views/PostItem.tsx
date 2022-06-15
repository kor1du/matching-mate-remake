import { Button, Card } from "react-bootstrap";
import { Post } from "../components/GetPosts";

interface PostItemPropse {
  post: Post;
}

const PostItem: React.FC<PostItemPropse> = ({ post }) => {
  return (
    <Card className="post">
      <div className="category">
        <img src={post.categoryImgAddress} alt="category-img" />
      </div>
      <div className="detail">
        <p>종목 : {post.categoryName}</p>
        <p>제목 : {post.postName}</p>
        <p>추천 실력 : {post.recommendedSkill}</p>
        <p>장소 : {post.place}</p>
      </div>
      <Button className="btn-join" variant="danger">
        참가하기
      </Button>
    </Card>
  );
};

export default PostItem;
