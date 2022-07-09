import { Dispatch, SetStateAction } from "react";
import { User } from "../login/views/SignupPage";
import { NewPost } from "../matchingPost/components/CreatePost";
interface ModalDaumPostCodeProps {
    user?: User;
    setUser?: Dispatch<SetStateAction<User>>;
    newPost?: NewPost;
    setNewPost?: Dispatch<SetStateAction<NewPost>>;
    setShow: Dispatch<SetStateAction<boolean>>;
}
declare const ModalDaumPostCode: React.FC<ModalDaumPostCodeProps>;
export default ModalDaumPostCode;
