import { Dispatch } from "redux";
import {
  TaskDispatchTypes,
  GET_TASKS,
  TASKS_SUCCESS,
  TASKS_FAIL,
  TaskType,
  ADD_TASK,
  SET_TASK,
  DELETE_TASK,
} from "../types/TasksActionTypes";

const baseAPI: string = "https://lb-todo-list.firebaseio.com/";

export const deleteTask = (id: string) => async (
  dispatch: Dispatch<TaskDispatchTypes>
) => {
  try {
    fetch(`${baseAPI}tasks/${id}.json`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    dispatch({
      type: DELETE_TASK,
      payload: {
        id: id,
      },
    });
  } catch (e) {
    dispatch({
      type: TASKS_FAIL,
    });
  }
};

export const setTask = (task: TaskType) => async (
  dispatch: Dispatch<TaskDispatchTypes>
) => {
  try {
    fetch(`${baseAPI}tasks/${task.id}.json`, {
      method: "PUT",
      body: JSON.stringify(task),
      headers: { "Content-Type": "application/json" },
    });
    dispatch({
      type: SET_TASK,
      payload: {
        task: {
          id: task.id,
          isDone: task.isDone,
          text: task.text,
        },
      },
    });
  } catch (e) {
    dispatch({
      type: TASKS_FAIL,
    });
  }
};

export const addTask = (task: TaskType) => async (
  dispatch: Dispatch<TaskDispatchTypes>
) => {
  try {
    const responseData = await (
      await fetch(`${baseAPI}tasks.json`, {
        method: "POST",
        body: JSON.stringify(task),
        headers: { "Content-Type": "application/json" },
      })
    ).json();

    dispatch({
      type: ADD_TASK,
      payload: {
        task: {
          id: responseData.name,
          isDone: task.isDone,
          text: task.text,
        },
      },
    });
  } catch (e) {
    dispatch({
      type: TASKS_FAIL,
    });
  }
};

export const getTasks = () => async (dispatch: Dispatch<TaskDispatchTypes>) => {
  try {
    dispatch({
      type: GET_TASKS,
    });

    const responseData = await (await fetch(`${baseAPI}tasks.json`)).json();

    const loadedTasks: TaskType[] = [];

    for (const key in responseData) {
      loadedTasks.push({
        id: key,
        isDone: responseData[key].isDone,
        text: responseData[key].text,
      });
    }

    dispatch({
      type: TASKS_SUCCESS,
      payload: {
        tasks: loadedTasks,
      },
    });
  } catch (e) {
    dispatch({
      type: TASKS_FAIL,
    });
  }
};
