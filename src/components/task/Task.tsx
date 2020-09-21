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
        isDone ? styles.TaskDone : styles.Task
      }
    >
      {text}
    </div>
  );
};

export default Task;
