import { combineReducers } from "redux";
import { AppReducer } from "./AppRedux";
import { ListReducer } from "./ListRedux";

export const rootReducer = () => {
  return combineReducers({
    app: AppReducer,
    list: ListReducer
  });
};
