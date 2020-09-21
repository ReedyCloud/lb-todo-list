import React, { useState } from "react";

import styles from "./TaskCreator.module.scss";

const TaskCreator = () => {
  const [text, setText] = useState("");
  const [
    isCreatorOpen,
    setCreatorOpen,
  ] = useState(false);

  return (
    <div className={styles.TaskCreator}>
      {/* coulve used 
      
        isModalOpen ? <button /> : <modal />
        not sure which one is prettier/better

      */}

      {!isCreatorOpen && (
        <button
          className={styles.Button}
          onClick={() => setCreatorOpen(true)}
        >
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
          <div className={styles.Caption}>
            Create New Task!
          </div>
          <textarea
            className={styles.Textarea}
            name="task-text"
            id="task-text"
            value={text}
            onChange={(e) =>
              setText(e.target.value)
            }
          />
          <button className={styles.Button}>
            Create Me
          </button>
        </div>
      )}
    </div>
  );
};

export default TaskCreator;
