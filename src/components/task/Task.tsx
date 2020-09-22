import React from "react";

import styles from "./Task.module.scss";

interface iProps {
  isDone: boolean;
  text: string;
}

const Task = ({ isDone, text }: iProps) => {
  return (
    <div className={isDone ? styles.TaskDone : styles.Task}>
      <div>{text}</div>
      <div>
        <button> delete task</button>
        <button> edit task</button>
        <button>{isDone ? "finish" : "unfinish"}</button>
      </div>
    </div>
  );
};

export default Task;
