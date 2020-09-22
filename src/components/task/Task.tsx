import React from "react";
import { TaskType } from "../../store/types/TasksActionTypes";

import styles from "./Task.module.scss";

interface iProps {
  isDone: boolean;
  text: string;
  id: string;
  onSetTask: (task: TaskType) => void;
}

const Task = ({ id, isDone, text, onSetTask }: iProps) => {
  const onSet = () => {
    console.log(id, isDone, text);
    onSetTask({
      id: id,
      isDone: !isDone,
      text: text,
    });
  };

  return (
    <div
      className={
        isDone ? [styles.TaskDone, styles.Task].join(" ") : styles.Task
      }
    >
      <div className={styles.Text}>{text}</div>
      <div className={styles.Controls}>
        <button className={styles.Button}> delete task</button>
        <button className={styles.Button}> edit task</button>
        <button onClick={onSet} className={styles.Button}>
          {!isDone ? "finish" : "unfinish"}
        </button>
      </div>
    </div>
  );
};

export default Task;
