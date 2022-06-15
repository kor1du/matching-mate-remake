import { combineReducers } from "redux";
import categoryRedux from "./CategoryRedux";

const rootReducer = combineReducers({
  categoryRedux,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
