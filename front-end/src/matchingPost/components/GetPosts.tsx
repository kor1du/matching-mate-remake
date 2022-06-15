import axios from "axios";
import { getCoordinate } from "./GetMap";

export interface Post {
  categoryImgAddress: string;
  categoryName: string;
  id: number;
  inChatNumber: number;
  matchingDate: Date;
  matchingTime: string;
  maxNumberOfPeople: number;
  nickname: string;
  numberOfPeople: number;
  place: string;
  postName: string;
  profileImgAddress: string;
  recommendedSkill: string;
  registerDatetime: string;
  views: number;
}
export default async function GetPosts() {
  const posts: Array<Post> = await getData();
  return posts;
}

async function getData() {
  const token = sessionStorage.getItem("accessToken");
  const position = await getCoordinate();

  const data = axios
    .get("http://kor1du.gonetis.com:8080/recent", {
      params: {
        Authorization: token,
        lat: position.lat,
        lng: position.lng,
      },
    })
    .then((res) => {
      return res.data.data;
    });

  return data;
}
