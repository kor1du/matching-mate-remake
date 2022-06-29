import { combineReducers } from "redux";
import CategoryRedux from "./CategoryRedux";
import MatchinPostRedux from "./MatchingPostRedux";

const rootReducer = combineReducers({
  CategoryRedux,
  MatchinPostRedux,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
