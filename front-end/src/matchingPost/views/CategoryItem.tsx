import { Category } from "../components/GetCategorys";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  return (
    <div className="category">
      <img src={category.imgAddress} alt="img-category" />
      <p>{category.name}</p>
    </div>
  );
};

export default CategoryItem;
