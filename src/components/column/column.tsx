import styles from './column.module.css'

import ColumnItem from '../columnItem/columnItem';
import useTasks from '../../services/store';
import { useMemo } from 'react';
import { IColumn } from '../../services/store';
import { nanoid } from 'nanoid';
import styled from 'styled-components';

const StyledlistTitle = styled.span<{$isDarkTheme?:boolean}> `
  display: flex;
  color: ${props => props.$isDarkTheme ? 'var(--medium-grey)' : 'var(--black)'};
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`

const Column = ({column}:{column: IColumn}) => {
  const {setCurrentColumn, isDarkTheme} = useTasks()
  const iconColor = useMemo(() => Math.floor(Math.random()*16777215).toString(16),[])
  return (
    <ul className={styles.taskList} onClick={() => setCurrentColumn(column.columnName)} key={nanoid()}>
      <StyledlistTitle className={`heading_M`} $isDarkTheme={isDarkTheme}> 
        <div className={styles.titleIcon} style={{backgroundColor:`#${iconColor}`}}/>
        {`${column.columnName} (${ column.tasks?.length || '0'})`}
      </StyledlistTitle>
      {column.tasks?.map((task) => {
              return <ColumnItem key={task.taskID} task={task}/>
      })}


    </ul>
  )
}

export default Column; 