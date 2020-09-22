import {
  TaskDispatchTypes,
  TaskType,
  GET_TASKS,
  TASKS_FAIL,
  TASKS_SUCCESS,
} from "../types/TasksActionTypes";

interface initialStateI {
  loading: boolean;
  tasks: TaskType[];
}

const initialState: initialStateI = {
  loading: false,
  tasks: [],
};

const tasksReducer = (
  state: initialStateI = initialState,
  action: TaskDispatchTypes
): initialStateI => {
  switch (action.type) {
    case TASKS_FAIL:
      return {
        ...state,
        loading: false,
      };
    case GET_TASKS:
      return {
        ...state,
        loading: true,
      };
    case TASKS_SUCCESS:
      return {
        loading: false,
        tasks: action.payload.tasks,
      };
    default:
      return state;
  }
};

export default tasksReducer;
