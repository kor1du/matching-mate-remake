import axios from "axios";

export default function Join(postID: number) {
  axios
    .post(
      "https://api.matching-mate.com/matchingPost/join",
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
