import { Dispatch } from "redux";
import {
  TaskDispatchTypes,
  GET_TASKS,
  TASKS_SUCCESS,
  TASKS_FAIL,
  TaskType,
} from "../types/TasksActionTypes";

export const getTasks = () => async (dispatch: Dispatch<TaskDispatchTypes>) => {
  try {
    dispatch({
      type: GET_TASKS,
    });

    const responseData = await (
      await fetch("https://lb-todo-list.firebaseio.com/tasks.json")
    ).json();

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
