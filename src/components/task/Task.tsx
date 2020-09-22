import React, { useState } from "react";
import { TaskType } from "../../store/types/TasksActionTypes";

import styles from "./Task.module.scss";

interface iProps {
  isDone: boolean;
  text: string;
  id: string;
  onSetTask: (task: TaskType) => void;
  onDeleteTask: (id: string) => void;
}

const Task = ({ id, isDone, text, onSetTask, onDeleteTask }: iProps) => {
  const [editedText, setEditedText] = useState("");
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  const onSet = () => {
    onSetTask({
      id: id,
      isDone: !isDone,
      text: text,
    });
  };

  const onDelete = () => {
    onDeleteTask(id);
  };

  const onOpenEditor = () => {
    if (!isEditorOpen) {
      setIsEditorOpen(true);
      setEditedText(text);
    } else if (isEditorOpen && editedText !== text) {
      onSetTask({
        id: id,
        isDone: isDone,
        text: editedText,
      });
      setIsEditorOpen(false);
    } else {
      setIsEditorOpen(false);
    }
  };

  return (
    <div
      className={
        isDone ? [styles.TaskDone, styles.Task].join(" ") : styles.Task
      }
    >
      <div>
        {!isEditorOpen ? (
          <div className={styles.Text}>{text}</div>
        ) : (
          <textarea
            className={styles.Textarea}
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        )}
      </div>
      <div className={styles.Controls}>
        <button onClick={onDelete} className={styles.Button}>
          delete task
        </button>
        {/* considered renderind that button only if task is unfinished */}
        <button onClick={onOpenEditor} className={styles.Button}>
          {isEditorOpen ? "Apply Changes" : "Edit Note"}
        </button>
        <button onClick={onSet} className={styles.Button}>
          {!isDone ? "finish" : "unfinish"}
        </button>
      </div>
    </div>
  );
};

export default Task;
