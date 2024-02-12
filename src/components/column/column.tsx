import styles from './column.module.css'

import ColumnItem from '../columnItem/columnItem';



const Column = ({column}) => {

  
  return (
    <ul className={styles.taskList}>
      <span  className={`${styles.listTitle} heading_M`}> 
        <div className={styles.titleIcon}/>
        {`${column.columnName} (${column.tasks.length})`}
      </span>
      {column.tasks.map((task) => {
              return <ColumnItem task={task}/>
      })}


    </ul>
  )
}

export default Column; 