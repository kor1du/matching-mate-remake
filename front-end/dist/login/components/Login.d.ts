export interface User {
    userId: string;
    userPw: string;
}
export default function Login(user: User): Promise<boolean>;
