import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../store/store";
import Task from "../task/Task";
import Loader from "../loader/Loader";
import TaskCreator from "../taskCreator/TaskCreator";
import { addTask, setTask, getTasks } from "../../store/actions/TasksActions";

import styles from "./Main.module.scss";
import { TaskType } from "../../store/types/TasksActionTypes";

const Main = () => {
  const dispatch = useDispatch();
  const tasksState = useSelector((state: RootStore) => state.tasks);

  useEffect(() => {
    dispatch(getTasks());
  }, []);

  const handleAddTask = (task: TaskType) => {
    dispatch(addTask(task));
  };

  const handleSetTask = (task: TaskType) => {
    dispatch(setTask(task));
  };

  return (
    <div className={styles.Main}>
      <TaskCreator onAdd={handleAddTask} />
      {tasksState.loading ? (
        <Loader />
      ) : (
        <div className={styles.TaskLists}>
          <div className={styles.TaskList}>
            {tasksState.tasks
              .filter((task) => {
                return !task.isDone;
              })
              .map((t) => {
                return (
                  <Task
                    onSetTask={handleSetTask}
                    key={t.id}
                    isDone={t.isDone}
                    text={t.text}
                    id={t.id}
                  />
                );
              })}
          </div>
          <div className={styles.TaskList}>
            {tasksState.tasks
              .filter((task) => {
                return task.isDone;
              })
              .map((t) => {
                return (
                  <Task
                    onSetTask={handleSetTask}
                    key={t.id}
                    isDone={t.isDone}
                    text={t.text}
                    id={t.id}
                  />
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Main;
