import axios from "axios";

export default function Logout() {
  postLogout();
  deleteSessionItems();
  window.location.reload();
}

function postLogout(): void {
  axios.post(
    "http://kor1du.gonetis.com:8080/logout",
    {},
    {
      headers: {
        Authorization: "bearer " + sessionStorage.getItem("accessToken"),
      },
    }
  );
}

function deleteSessionItems(): void {
  sessionStorage.clear();
}
