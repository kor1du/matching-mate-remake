import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Pagination from "../../pagination/Pagination";
import { RootState } from "../../redux";
import GetPosts, { Post } from "../components/GetPosts";
import ModalPostCreate from "./ModalPostCreate";
import PostItem from "./PostItem";

const Posts: React.FC = () => {
  const categoryRedux = useSelector((state: RootState) => state.CategoryRedux.category);
  const position = useSelector((state: RootState) => state.MatchinPostRedux.position);

  const [posts, setPosts] = useState<Array<Post>>([
    {
      categoryImgAddress: "",
      categoryName: "",
      id: 0,
      inChatNumber: 0,
      matchingDate: new Date(),
      matchingTime: "",
      maxNumberOfPeople: 0,
      nickname: "",
      numberOfPeople: 0,
      place: "",
      postName: "",
      profileImgAddress: "",
      recommendedSkill: "",
      registerDatetime: "",
      views: 0,
    },
  ]);

  const [limit, setLimit] = useState<number>(4);
  const [page, setPage] = useState<number>(1);
  const offset = (page - 1) * limit;

  useEffect(() => {
    GetPosts(position).then((res) => {
      setPosts(res);
    });
  }, [position]);

  return (
    <div className="posts">
      <p className="title">공고목록</p>
      <ModalPostCreate></ModalPostCreate>
      <div className="post-list">
        {categoryRedux.length === 0 || categoryRedux === "전체"
          ? posts.slice(offset, offset + limit).map((post) => {
              return <PostItem key={post.id} post={post} posts={posts} setPosts={setPosts}></PostItem>;
            })
          : posts.slice(offset, offset + limit).map((post) => {
              if (post.categoryName === categoryRedux) return <PostItem key={post.id} post={post} posts={posts} setPosts={setPosts}></PostItem>;
            })}
      </div>
      <Pagination total={posts.length} limit={limit} page={page} setPage={setPage} />
    </div>
  );
};

export default Posts;
