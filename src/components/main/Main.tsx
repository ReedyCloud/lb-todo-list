import React, {
  useState,
  useEffect,
} from "react";

import Task from "../task/Task";
import TaskCreator from "../taskCreator/TaskCreator";

import styles from "./Main.module.scss";

const Main = () => {
  return (
    <div className={styles.Main}>
      <TaskCreator />
      <Task
        isDone={false}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, eaque
         ullam! Debitis cum ipsam dignissimos, odio magnam placeat sed maxime."
      />
      <Task isDone={true} text="xd" />
      jestem cialem
    </div>
  );
};

export default Main;
