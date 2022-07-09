import axios from "axios";
export interface Category {
  id: number;
  imgAddress: string;
  name: string;
}

export default async function GetCategorys() {
  const categorys: Array<Category> = await getData();
  return categorys;
}

function getData(): any {
  const categorys = axios.get("https://api.matching-mate.com/category").then((res) => {
    return res.data.data;
  });
  return categorys;
}
