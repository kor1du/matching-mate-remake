import axios from "axios";

export default function Logout() {
  postLogout();
  deleteSessionItems();
  window.location.reload();
}

function postLogout(): void {
  axios.post(
    "https://api.matching-mate.com/logout",
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
