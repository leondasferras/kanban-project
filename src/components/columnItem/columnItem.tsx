import styles from "./columnItem.module.css"

const ColumnItem = () => {
  return (
    <li className={styles.columnItem}>
      <div className={`${styles.taskName} heading_M`}> Build UI for onboarding flow</div>
      <div className={`${styles.subtaskCounter} text_bold`}> 0 of 6 substasks</div>
    </li>
  )
}


export default ColumnItem
