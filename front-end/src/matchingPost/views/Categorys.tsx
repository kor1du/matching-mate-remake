import { useEffect, useState } from "react";
import GetCategorys, { Category } from "../components/GetCategorys";
import CategoryItem from "./CategoryItem";

const Categorys: React.FC = () => {
  const [categorys, setCategorys] = useState<Array<Category>>([
    {
      id: 0,
      imgAddress: "",
      name: "",
    },
  ]);

  useEffect(() => {
    GetCategorys().then((res) => {
      setCategorys(res);
    });
  }, []);

  return (
    <div className="categorys">
      <h1 className="title">카테고리</h1>
      <div className="category-list">
        {categorys.map((category) => {
          return (
            <CategoryItem key={category.id} category={category}></CategoryItem>
          );
        })}
      </div>
    </div>
  );
};

export default Categorys;
