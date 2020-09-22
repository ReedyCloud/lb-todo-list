import React from "react";

import styles from "./Task.module.scss";

interface iProps {
  isDone: boolean;
  text: string;
}

const Task = ({ isDone, text }: iProps) => {
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
        <button className={styles.Button}>
          {!isDone ? "finish" : "unfinish"}
        </button>
      </div>
    </div>
  );
};

export default Task;
