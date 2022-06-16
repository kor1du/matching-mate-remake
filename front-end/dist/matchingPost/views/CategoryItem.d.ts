/// <reference types="react" />
import { Category } from "../components/GetCategorys";
interface CategoryItemProps {
    category: Category;
    categoryRedux: string;
    onSetCategoryName: (categoryName: string) => void;
    onInitializeCategoryname: () => void;
}
declare const CategoryItem: React.FC<CategoryItemProps>;
export default CategoryItem;
