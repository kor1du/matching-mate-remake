import { useEffect } from "react";
import { Category } from "../components/GetCategorys";

interface CategoryItemProps {
  category: Category;
  categoryRedux: string;
  onSetCategoryName: (categoryName: string) => void;
  onInitializeCategoryname: () => void;
}

const CategoryItem: React.FC<CategoryItemProps> = ({
  category,
  categoryRedux,
  onSetCategoryName,
  onInitializeCategoryname,
}) => {
  return (
    <div className="category">
      <img
        src={category.imgAddress}
        alt="img-category"
        onClick={() => {
          if (categoryRedux.length === 0) onSetCategoryName(category.name);
          else {
            onInitializeCategoryname();
            onSetCategoryName(category.name);
          }
        }}
      />
      <p>{category.name}</p>
    </div>
  );
};

export default CategoryItem;
