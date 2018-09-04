import { combineReducers } from "redux";
import profiles from "./profiles";
import lists from "./lists";

const rootReducer = combineReducers({
  profiles,
  lists
});

export default rootReducer;
