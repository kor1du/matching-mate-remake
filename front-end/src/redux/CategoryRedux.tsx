const SET_CATEGORY_NAME = "category/SETCATEGORYNAME" as const;
const Initialize_CATEGORY_NAME = "category?INITIALIZECATEGORYNAME" as const;

export const setCategoryName = (category: string) => ({
  type: SET_CATEGORY_NAME,
  payload: category,
});

export const initializeCategoryName = () => ({
  type: Initialize_CATEGORY_NAME,
});

type CategoryAction =
  | ReturnType<typeof setCategoryName>
  | ReturnType<typeof initializeCategoryName>;

type CategoryState = {
  category: string;
};

const initialState: CategoryState = {
  category: "",
};

function categoryRedux(
  state: CategoryState = initialState,
  action: CategoryAction
): CategoryState {
  switch (action.type) {
    case SET_CATEGORY_NAME:
      return { category: state.category + action.payload };
    case Initialize_CATEGORY_NAME:
      return { category: "" };
    default:
      return state;
  }
}

export default categoryRedux;
