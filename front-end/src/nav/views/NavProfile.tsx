import { useState } from "react";
import { Link } from "react-router-dom";
import Logout from "../../login/components/Logout";
import ShowMenus from "../components/ShowMenus";

interface Profile {
  imgAddress: string | null;
  nickname: string | null;
}

const NavProfile: React.FC = () => {
  const [profile, setProfile] = useState<Profile>({
    imgAddress: sessionStorage.getItem("profileImgAddress"),
    nickname: sessionStorage.getItem("nickname"),
  });

  if (profile.imgAddress !== null) {
    return (
      <>
        <div className="profile-img">
          <img
            src={profile.imgAddress}
            alt="img-profile"
            className="img-profile"
            onClick={ShowMenus}
          />
        </div>
        <div className="profile-menus">
          <div className="menus">
            <p className="greeting">안녕하세요 {profile.nickname}님!</p>
            <Link to="/matching/post">매칭공고</Link>
            <Link to="#">매칭프로필</Link>
            <Link to="/chatting">채팅</Link>
            <Link to="#" onClick={Logout}>
              로그아웃
            </Link>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default NavProfile;
