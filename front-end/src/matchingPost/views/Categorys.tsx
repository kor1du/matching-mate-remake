import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";
import {
  initializeCategoryName,
  setCategoryName,
} from "../../redux/CategoryRedux";
import GetCategorys, { Category } from "../components/GetCategorys";
import CategoryItem from "./CategoryItem";

const Categorys: React.FC = () => {
  const categoryRedux = useSelector(
    (state: RootState) => state.categoryRedux.category
  );
  const dispatch = useDispatch();

  const onSetCategoryName = (categoryName: string) => {
    dispatch(setCategoryName(categoryName));
  };

  const onInitializeCategoryName = () => {
    dispatch(initializeCategoryName());
  };

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
            <CategoryItem
              key={category.id}
              category={category}
              categoryRedux={categoryRedux}
              onSetCategoryName={onSetCategoryName}
              onInitializeCategoryname={onInitializeCategoryName}
            ></CategoryItem>
          );
        })}
      </div>
    </div>
  );
};

export default Categorys;
