import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import GetPosts, { Post } from "../components/GetPosts";
import PostItem from "./PostItem";

const Posts: React.FC = () => {
  const categoryRedux = useSelector(
    (state: RootState) => state.categoryRedux.category
  );

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

  useEffect(() => {
    GetPosts().then((res) => {
      setPosts(res);
    });
  }, []);

  return (
    <div className="posts">
      <p className="title">공고목록</p>
      <div className="post-list">
        {categoryRedux.length === 0
          ? posts.map((post) => {
              return <PostItem key={post.id} post={post}></PostItem>;
            })
          : posts.map((post) => {
              if (post.categoryName === categoryRedux)
                return <PostItem key={post.id} post={post}></PostItem>;
            })}
      </div>
    </div>
  );
};

export default Posts;
