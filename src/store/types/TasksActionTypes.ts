export const GET_TASKS = "GET_TASKS";
export const TASKS_SUCCESS = "TASKS_SUCCESS";
export const TASKS_FAIL = "TASKS_FAIL";
export const ADD_TASK = "ADD_TASK";

export type TaskType = {
  id?: string;
  text: string;
  isDone: boolean;
};

export interface getTasks {
  type: typeof GET_TASKS;
}
export interface tasksFail {
  type: typeof TASKS_FAIL;
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

export type TaskDispatchTypes = getTasks | tasksSuccess | tasksFail | addTask;
