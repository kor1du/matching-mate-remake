import { combineReducers } from "redux";
import CategoryRedux from "./CategoryRedux";

const rootReducer = combineReducers({
  CategoryRedux,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
