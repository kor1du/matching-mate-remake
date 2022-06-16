export declare const setCategoryName: (category: string) => {
    type: "category/SETCATEGORYNAME";
    payload: string;
};
export declare const initializeCategoryName: () => {
    type: "category?INITIALIZECATEGORYNAME";
};
declare type CategoryAction = ReturnType<typeof setCategoryName> | ReturnType<typeof initializeCategoryName>;
declare type CategoryState = {
    category: string;
};
declare function categoryRedux(state: CategoryState | undefined, action: CategoryAction): CategoryState;
export default categoryRedux;
