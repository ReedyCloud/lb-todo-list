import { combineReducers } from "redux";
import tasksReducer from "./TasksReducer";

const RootReducer = combineReducers({
  tasks: tasksReducer,
});

export default RootReducer;
