import styles from "./openTask.module.css";
import Checkbox from "../../../../ui/Checkbox/checkbox";
import Dropdown from "../../../../ui/Dropdown/dropdown";
import KebabBtn from "../../../../ui/KebabBtn/KebabBtn";
import useTasks from "../../../../services/store";
import { nanoid } from "nanoid";
import { ChangeEvent } from "react";

const OpenTask = () => {
  const { currentTask, boards, editTask, currentBoard, replaceTask, currentColumn, setCurrentColumn,setIsDeleteTask, setisTaskOpened, setIsEditTaskModal } = useTasks();
  const columns = boards.find(board => board.boardName === currentBoard)?.columns.map(column => column.columnName)
  const allSubtasksCounter = currentTask.subtasks.length;
  const doneSubtasksCounter = currentTask.subtasks.filter(
    (subtask) => subtask.isDone === true
  ).length;
  
  const onCheckboxChange = (e:ChangeEvent<HTMLInputElement>) => {
    const newSubtask = currentTask.subtasks.find(subtask => subtask.id === e.target.id)
    newSubtask!.isDone = !newSubtask!.isDone
    const newTask = {...currentTask}
    editTask(newTask)
  }

  const onColumnChange = (newColumnName:string) => {
    replaceTask(newColumnName)
    setCurrentColumn(newColumnName)

  }

  const onDeleteTask = () => {
    setIsDeleteTask(true)
    setisTaskOpened(false)
  }

  const onEditTask = () => {
    setisTaskOpened(false)
    setIsEditTaskModal(true)
  }

  return (
    <>
      <div className={styles.wrapper}>
        <p className="heading_L">{currentTask.taskName}</p>
        <KebabBtn onDelete = {onDeleteTask} onEdit={onEditTask} subject="task"/>
      </div>
      <p className={`${styles.text} text_medium`}>{currentTask.description}</p>
      <ul className={`${styles.subtasks} text_bold`}>
        Subtasks({doneSubtasksCounter} of {allSubtasksCounter})
        {currentTask.subtasks.map((subtask) => (
          <li key={nanoid()}>
            <Checkbox title={subtask.name} onChange={onCheckboxChange} checked={subtask.isDone} id={subtask.id}/>
          </li>
        ))}
      </ul>
      <Dropdown options={[...columns!]} onOptionChange = {onColumnChange} defaultOption= {currentColumn} />
    </>
  );
};

export default OpenTask;
