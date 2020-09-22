import { Dispatch } from "redux";
import {
  TaskDispatchTypes,
  GET_TASKS,
  TASKS_SUCCESS,
  TASKS_FAIL,
  TaskType,
  ADD_TASK,
} from "../types/TasksActionTypes";

const baseAPI: string = "https://lb-todo-list.firebaseio.com/";

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
    console.log(responseData.name);
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
