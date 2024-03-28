import styles from './column.module.css'

import ColumnItem from '../columnItem/columnItem';
import useTasks from '../../services/store';
import styled from 'styled-components';
import { useMemo } from 'react';


const Column = ({column}) => {
  const {setCurrentColumn} = useTasks()
  const iconColor = useMemo(() => Math.floor(Math.random()*16777215).toString(16),[])
  return (
    <ul className={styles.taskList} onClick={() => setCurrentColumn(column.columnName)}>
      <span  className={`${styles.listTitle} heading_M`}> 
        <div className={styles.titleIcon} style={{backgroundColor:`#${iconColor}`}}/>
        {`${column.columnName} (${ column.tasks?.length || '0'})`}
      </span>
      {column.tasks?.map((task) => {
              return <ColumnItem key={task.taskID} task={task}/>
      })}


    </ul>
  )
}

export default Column; 