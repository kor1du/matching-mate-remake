import { Dispatch, SetStateAction } from "react";
import { User } from "./SignupPage";
interface DaumPostCodeProps {
    user: User;
    setUser: Dispatch<SetStateAction<User>>;
    setShow: Dispatch<SetStateAction<boolean>>;
}
declare const DaumPostCode: React.FC<DaumPostCodeProps>;
export default DaumPostCode;
