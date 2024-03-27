import styles from './column.module.css'

import ColumnItem from '../columnItem/columnItem';
import useTasks from '../../services/store';



const Column = ({column}) => {
  const {setCurrentColumn} = useTasks()
  
  return (
    <ul className={styles.taskList} onClick={() => setCurrentColumn(column.columnName)}>
      <span  className={`${styles.listTitle} heading_M`}> 
        <div className={styles.titleIcon}/>
        {`${column.columnName} (${column.tasks.length})`}
      </span>
      {column.tasks.map((task) => {
              return <ColumnItem key={task.taskID} task={task}/>
      })}


    </ul>
  )
}

export default Column; 