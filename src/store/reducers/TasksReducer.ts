import {
  TaskDispatchTypes,
  TaskType,
  GET_TASKS,
  TASKS_FAIL,
  TASKS_SUCCESS,
  ADD_TASK,
  SET_TASK,
  DELETE_TASK,
} from "../types/TasksActionTypes";

interface initialStateI {
  loading: boolean;
  tasks: TaskType[];
}

const initialState: initialStateI = {
  loading: false,
  tasks: [],
};

const setTask = (state: initialStateI, payload: TaskType) => {
  const updatedTasks: TaskType[] = state.tasks.map((task) => {
    if (task.id === payload.id) return payload;
    return task;
  });
  return {
    ...state,
    tasks: updatedTasks,
  };
};

const deleteTask = (state: initialStateI, id: string) => {
  const updatedTasks: TaskType[] = state.tasks.filter((task) => task.id !== id);
  return {
    ...state,
    tasks: updatedTasks,
  };
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
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload.task],
      };
    case SET_TASK:
      return setTask(state, action.payload.task);
    case DELETE_TASK:
      return deleteTask(state, action.payload.id);
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
