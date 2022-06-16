import React, { Dispatch, SetStateAction } from "react";
import "../styles/modalCheck.css";
import { User } from "./SignupPage";
interface CheckIDModalProps {
    user: User;
    setUser: Dispatch<SetStateAction<User>>;
}
declare const CheckNicknameModal: React.FC<CheckIDModalProps>;
export default CheckNicknameModal;
