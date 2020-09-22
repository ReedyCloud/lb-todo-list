import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store/store";
import Task from "../task/Task";
import Loader from "../loader/Loader";
import TaskCreator from "../taskCreator/TaskCreator";
import { getTasks } from "../../store/actions/TasksActions";

import styles from "./Main.module.scss";

const Main = () => {
  const dispatch = useDispatch();
  const tasksState = useSelector((state: RootStore) => state.tasks);
  const handleGet = () => dispatch(getTasks());

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  return (
    <div className={styles.Main}>
      <TaskCreator />
      <div onClick={handleGet}>siema ct</div>
      {tasksState.loading ? (
        <Loader />
      ) : (
        <div>
          <div>tasks undone</div>
          <div> tasks done</div>
        </div>
      )}
    </div>
  );
};

export default Main;
