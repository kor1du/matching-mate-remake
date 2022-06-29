import axios from "axios";
import { getCoordinate, Position } from "./GetMap";
import { Post } from "./GetPosts";

export default async function UpdateViews(post: Post, setPost: Function, position: any) {
  updateData(post, setPost, position);
}

function updateData(post: Post, setPost: Function, coordinator: Position) {
  axios
    .put("http://localhost:8080/matcingPost/update/views", {
      id: post.id,
      lat: coordinator.lat,
      lng: coordinator.lng,
    })
    .then((res) => {
      setPost(res.data.data);
    });
}
