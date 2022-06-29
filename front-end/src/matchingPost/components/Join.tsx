import axios from "axios";

export default function Join(postID: number) {
  axios
    .post(
      "http://localhost:8080/matchingPost/join",
      {
        matchingPostId: postID,
      },
      {
        headers: {
          Authorization: `bearer ${sessionStorage.getItem("accessToken")}`,
        },
      }
    )
    .then((res) => {
      alert("참여되었습니다!");
    })
    .catch(() => {
      alert("매칭인원이 다 찼습니다!");
    });
}
