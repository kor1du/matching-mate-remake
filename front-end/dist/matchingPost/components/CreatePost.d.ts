export interface NewPost {
    categoryId: number;
    matchingDate: string;
    matchingTime: string;
    maxNumberOfPeople: number;
    place: string;
    postContents: string;
    postName: string;
    recommendedSkill: string;
}
export default function CreatePost(newPost: NewPost): void;
