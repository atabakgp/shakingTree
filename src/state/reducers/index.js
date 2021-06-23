import { combineReducers } from "redux";
import shakeReducer from "./shakeReducer";

const reducers = combineReducers({
  shakeReducer,
});

export default reducers;
