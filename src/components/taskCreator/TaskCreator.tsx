import React, { useState } from "react";
import { TaskType } from "../../store/types/TasksActionTypes";

import styles from "./TaskCreator.module.scss";

interface CreatorProps {
  onAdd: (task: TaskType) => void;
}

const TaskCreator = ({ onAdd }: CreatorProps) => {
  const [text, setText] = useState("");
  const [isCreatorOpen, setCreatorOpen] = useState(false);

  const onAddTask = () => {
    if (text.length > 10) {
      setCreatorOpen(false);
      onAdd({
        isDone: false,
        text: text,
      });
    } else {
      alert("write longer task");
    }
  };

  return (
    <div className={styles.TaskCreator}>
      {/* coulve used 
      
        isModalOpen ? <button /> : <modal />
        not sure which one is prettier/better

      */}

      {!isCreatorOpen && (
        <button className={styles.Button} onClick={() => setCreatorOpen(true)}>
          Create New Task
        </button>
      )}
      {isCreatorOpen && (
        <div className={styles.TaskModal}>
          <div
            role="button"
            className={styles.ModalCloseButton}
            onClick={() => setCreatorOpen(false)}
          ></div>
          <div className={styles.Caption}>Create New Task!</div>
          <textarea
            className={styles.Textarea}
            name="task-text"
            id="task-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={onAddTask} className={styles.Button}>
            Create Me
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskCreator;
