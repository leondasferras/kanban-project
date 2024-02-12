import { useState } from "react"
import styles from "./columnItem.module.css"

const ColumnItem = ({task}) => {


  return (
    <li className={styles.columnItem}>
      <div className={`${styles.taskName} heading_M`}> {task.taskName}</div>
      <div className={`${styles.subtaskCounter} text_bold`}>{` 0 of ${task.subtasks.length} substasks`}</div>
    </li>
  )
}


export default ColumnItem
