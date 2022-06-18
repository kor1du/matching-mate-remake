import { Card } from "react-bootstrap";
import { Post } from "../components/GetPosts";
import ModalPostDetail from "./ModalPostDetail";

interface PostItemPropse {
  post: Post;
  posts: Array<Post>;
  setPosts: Function;
}

const PostItem: React.FC<PostItemPropse> = ({ post, posts, setPosts }) => {
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
        <p>조회수 : {post.views}</p>
        <p>등록일 : {post.matchingDate + " " + post.matchingTime}</p>
      </div>
      <ModalPostDetail
        post={post}
        posts={posts}
        setPosts={setPosts}
      ></ModalPostDetail>
    </Card>
  );
};

export default PostItem;
