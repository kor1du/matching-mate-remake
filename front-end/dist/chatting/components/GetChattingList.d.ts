export interface ChattingListInterface {
    id: number;
    isCompleted: number;
    matchingPostId: number;
    matchingPostName: string;
    categoryImgAddress: string;
    maxNumberOfPeople: number;
    modifiedDatetime: string;
    myChattingMemberId: number;
    numberOfPeople: number;
    registerDatetime: string;
    roomNumberOfPeople: number;
}
export default function GetChattingList(): Promise<object>;
