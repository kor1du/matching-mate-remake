import React from "react";
import "../styles/signupPage.css";
export interface User {
    userId: string;
    userPw: string;
    name: string;
    nickname: string;
    address: string;
    birthday: string;
    phone: string;
    sex: string;
}
declare const SignupPage: React.FC;
export default SignupPage;
