import React from "react";
import { Post } from "../components/GetPosts";
interface ModalPostDetailprops {
    post: Post;
    posts: Array<Post>;
    setPosts: Function;
}
declare const ModalPostDetail: React.FC<ModalPostDetailprops>;
export default ModalPostDetail;
