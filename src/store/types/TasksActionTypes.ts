export const GET_TASKS = "GET_TASKS";
export const TASKS_SUCCESS = "TASKS_SUCCESS";
export const TASKS_FAIL = "TASKS_FAIL";
export const ADD_TASK = "ADD_TASK";
export const SET_TASK = "SET_TASK";
export const DELETE_TASK = "DELETE_TASK";

export type TaskType = {
  id: string;
  text: string;
  isDone: boolean;
};

export interface getTasks {
  type: typeof GET_TASKS;
}
export interface tasksFail {
  type: typeof TASKS_FAIL;
}

export interface setTask {
  type: typeof SET_TASK;
  payload: {
    task: TaskType;
  };
}

export interface tasksSuccess {
  type: typeof TASKS_SUCCESS;
  payload: {
    tasks: TaskType[];
  };
}

export interface addTask {
  type: typeof ADD_TASK;
  payload: {
    task: TaskType;
  };
}

export interface deleteTask {
  type: typeof DELETE_TASK;
  payload: {
    id: string;
  };
}

export type TaskDispatchTypes =
  | getTasks
  | tasksSuccess
  | tasksFail
  | addTask
  | deleteTask
  | setTask;
