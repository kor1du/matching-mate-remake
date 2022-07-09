import React, { Dispatch, SetStateAction } from "react";
import "./modalAddress.css";
import { User } from "../login/views/SignupPage";
import { NewPost } from "../matchingPost/components/CreatePost";
interface ModalAddressProps {
    user?: User;
    setUser?: Dispatch<SetStateAction<User>>;
    newPost?: NewPost;
    setNewPost?: Dispatch<SetStateAction<NewPost>>;
}
declare const ModalAddress: React.FC<ModalAddressProps>;
export default ModalAddress;
