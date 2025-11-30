import { combineReducers } from "@reduxjs/toolkit";
import pollReducer from "../slice/features/polls";

const rootReducer = combineReducers({
  polls: pollReducer,
});

export default rootReducer;
