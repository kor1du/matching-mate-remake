import { Dispatch, SetStateAction } from "react";
import DaumPostcode from "react-daum-postcode";
import GetAddress, { GetAddressNewPost } from "./GetAddress";
import { User } from "../login/views/SignupPage";
import { NewPost } from "../matchingPost/components/CreatePost";

interface ModalDaumPostCodeProps {
  user?: User;
  setUser?: Dispatch<SetStateAction<User>>;
  newPost?: NewPost;
  setNewPost?: Dispatch<SetStateAction<NewPost>>;
  setShow: Dispatch<SetStateAction<boolean>>;
}

const ModalDaumPostCode: React.FC<ModalDaumPostCodeProps> = ({
  user,
  setUser,
  newPost,
  setNewPost,
  setShow,
}) => {
  return (
    <div>
      <DaumPostcode
        className="modal-daum-post-code"
        onComplete={(e) => {
          if (setUser && user)
            /* 회원가입시 사용할 주소찾기 */
            setUser({
              ...user,
              address: GetAddress(e),
            });
          else if (newPost && setNewPost) {
            /* 매칭공고 등록시 사용할 주소찾기 */
            setNewPost({
              ...newPost,
              place: GetAddressNewPost(e),
            });

            console.log(newPost);
          }
          setShow(false);
        }}
      />
    </div>
  );
};

export default ModalDaumPostCode;
