import { useState } from "react"
import styles from "./columnItem.module.css"
import useTasks from '../../services/store';
import { ITask } from "../../services/store";
import styled from "styled-components";


const StyledColumnItem = styled.li<{$isDarkTheme?:boolean}> `
  width: 280px;
  padding: 23px 16px;
  box-sizing: border-box;
  background-color: ${props => props.$isDarkTheme ? 'var(--dark-gray)':'var(--white)'};
  color:${props => props.$isDarkTheme ? 'var(--white)':'var(--black)'};
  border-radius: 8px;
  box-shadow: 7px 5px 9px -5px  #000;
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
`

const ColumnItem = ({task}:{task:ITask}) => {

  const {setCurrentTask, setisTaskOpened, isDarkTheme} = useTasks()

  const doneSubtasksCounter = task.subtasks?.filter(subtask => subtask.isDone == true ).length;

  const onTaskClick = () => {
    setCurrentTask(task);
    setisTaskOpened(true);
  } 

  return (
    <StyledColumnItem className={styles.columnItem} onClick={onTaskClick} $isDarkTheme={isDarkTheme}>
      <div className={`${styles.taskName} heading_M`}> {task.taskName}</div>
      <div className={`${styles.subtaskCounter} text_bold`}>{` ${doneSubtasksCounter} of ${task.subtasks?.length} substasks`}</div>
    </StyledColumnItem>
  )
}


export default ColumnItem
