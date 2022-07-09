import axios from "axios";

export interface ChattingListInterface {
  id: number;
  isCompleted: number;
  matchingPostId: number;
  matchingPostName: string;
  categoryImgAddress: string;
  maxNumberOfPeople: number;
  modifiedDatetime: string;
  myChattingMemberId: number;
  numberOfPeople: number;
  registerDatetime: string;
  roomNumberOfPeople: number;
}

export default function GetChattingList(): Promise<object> {
  return getData();
}

function getData(): Promise<object> {
  const token: string | null = sessionStorage.getItem("accessToken");

  const data = axios
    .get("https://api.matching-mate.com/chat", {
      headers: {
        Authorization: "bearer " + token,
      },
    })
    .then((res: any) => {
      return res.data.data;
    });

  return data;
}
