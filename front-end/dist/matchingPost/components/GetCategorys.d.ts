export interface Category {
    id: number;
    imgAddress: string;
    name: string;
}
export default function GetCategorys(): Promise<Category[]>;
