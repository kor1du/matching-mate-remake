import { Dispatch, SetStateAction } from "react";
import { User } from "../views/SignupPage";
export default function checkNickname(nickname: string, user: User, setUser: Dispatch<SetStateAction<User>>): Promise<void>;
