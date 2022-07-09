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
export default async function GetPosts(position: any) {
  const posts: Array<Post> = await getData(position);
  return posts;
}

async function getData(position: any) {
  const token = sessionStorage.getItem("accessToken");

  const data = axios
    .get("https://api.matching-mate.com/recent", {
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
