import axios from "axios";

export interface NewPost {
  categoryId: number;
  matchingDate: string;
  matchingTime: string;
  maxNumberOfPeople: number;
  place: string;
  postContents: string;
  postName: string;
  recommendedSkill: string;
}

export default function CreatePost(newPost: NewPost): void {
  console.log(newPost);
  postData(newPost);
}

function postData(newPost: NewPost): void {
  axios
    .post("https://api.matching-mate.com/matchingPost/create", newPost, {
      headers: {
        Authorization: "bearer " + sessionStorage.getItem("accessToken"),
      },
    })
    .then((res) => {
      console.log(res);
    })
    .catch(() => {
      alert("정보를 다시 입력해주세요!");
    });
}
