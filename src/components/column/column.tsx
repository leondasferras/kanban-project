import styles from './column.module.css'

import ColumnItem from '../columnItem/columnItem';



const Column = () => {
  return (
    <ul className={styles.taskList}>
      <span  className={`${styles.listTitle} heading_M`}> 
        <div className={styles.titleIcon}/>
        TODO{ '(123)'}
      </span>
      <ColumnItem/>
      <ColumnItem/>
      <ColumnItem/>
    </ul>
  )
}

export default Column; 