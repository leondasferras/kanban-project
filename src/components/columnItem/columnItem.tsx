import { useState } from "react"
import styles from "./columnItem.module.css"
import useTasks from '../../services/store';

const ColumnItem = ({task}) => {

  const {setCurrentTask, setisTaskOpened} = useTasks()

  const doneSubtasksCounter = task.subtasks.filter(subtask => subtask.isDone == true ).length;

  const onTaskClick = () => {
    setCurrentTask(task);
    setisTaskOpened(true);
  } 

  return (
    <li className={styles.columnItem} onClick={onTaskClick}>
      <div className={`${styles.taskName} heading_M`}> {task.taskName}</div>
      <div className={`${styles.subtaskCounter} text_bold`}>{` ${doneSubtasksCounter} of ${task.subtasks.length} substasks`}</div>
    </li>
  )
}


export default ColumnItem
