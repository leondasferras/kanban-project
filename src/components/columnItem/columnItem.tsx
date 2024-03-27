import { useState } from "react"
import styles from "./columnItem.module.css"
import useTasks from '../../services/store';

const ColumnItem = ({task}) => {

  const {setCurrentTask} = useTasks()

  const doneSubtasksCounter = task.subtasks.filter(subtask => subtask.isDone == true ).length;

  return (
    <li className={styles.columnItem} onClick={() => setCurrentTask(task)}>
      <div className={`${styles.taskName} heading_M`}> {task.taskName}</div>
      <div className={`${styles.subtaskCounter} text_bold`}>{` ${doneSubtasksCounter} of ${task.subtasks.length} substasks`}</div>
    </li>
  )
}


export default ColumnItem
