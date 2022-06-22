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
  const categorys = axios.get("http://localhost:8080/category").then((res) => {
    return res.data.data;
  });
  return categorys;
}
