import React, { Dispatch, SetStateAction } from "react";
import "../styles/modalAddress.css";
import { User } from "./SignupPage";
interface AddressModalProps {
    user: User;
    setUser: Dispatch<SetStateAction<User>>;
}
declare const AddressModal: React.FC<AddressModalProps>;
export default AddressModal;
