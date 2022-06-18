import axios from "axios";
import { Post } from "./GetPosts";

export default function UpdateViews(post: Post, setPost: Function) {
  updateData(post, setPost);
}

function updateData(post: Post, setPost: Function) {
  axios
    .put("http://kor1du.gonetis.com:8080/matcingPost/update/views", {
      id: post.id,
    })
    .then((res) => {
      setPost(res.data.data);
    });
}
