export interface Post {
    categoryImgAddress: string;
    categoryName: string;
    id: number;
    inChatNumber: number;
    matchingDate: Date;
    matchingTime: string;
    maxNumberOfPeople: number;
    nickname: string;
    numberOfPeople: number;
    place: string;
    postName: string;
    profileImgAddress: string;
    recommendedSkill: string;
    registerDatetime: string;
    views: number;
}
export default function GetPosts(): Promise<Post[]>;
