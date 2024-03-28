import { nanoid } from "nanoid";
import styles from "./editTask.module.css";
import Input from "../../../../ui/Input/input";
import Button from "../../../../ui/Button/button";
import Dropdown from "../../../../ui/Dropdown/dropdown";
import { useState } from "react";
import useTasks from "../../../../services/store";

const EditTask = () => {
  const { currentBoard, boards, currentTask, currentColumn, editTask, replaceTask, setIsEditTaskModal, setCurrentTask } = useTasks();
  const columnList = boards
    .find((board) => board.boardName === currentBoard)
    .columns.map((column) => column.columnName);

  const [subtasks, setSubtasks] = useState(currentTask.subtasks);

  const [newTaskInfo, setNewTaskInfo] = useState({taskName:currentTask.taskName, description:currentTask.description});
  const [newTaskColumn, setNewTaskColumn] = useState('');

  const onSubtaskChange = (e) => {
   const newSubtasks = [...subtasks]
   const subtaskToChange = newSubtasks.find(subtask => subtask.id === e.target.name)
   subtaskToChange.name = e.target.value
   setSubtasks(newSubtasks)
  };

  const onSubtaskDelete = (e) => {
    const newSubtasks = [...subtasks]
    const subtaskToDelete = newSubtasks.findIndex(subtask => subtask.id === e.target.dataset.id)
    console.log(e.target)
    newSubtasks.splice(subtaskToDelete, 1)
    setSubtasks(newSubtasks)
  }

  const onSubtaskAdd = () => {
    const newSubtasks = [...subtasks]
    newSubtasks.push({id:nanoid(), isDone: false})
    setSubtasks(newSubtasks)
  }

  const onTitleChange = (e) => {
    const newTitle = e.target.value 
    setNewTaskInfo({...newTaskInfo, taskName: newTitle})
  }

  const onDescriptionChange = (e) => {
    const newDescription = e.target.value
    setNewTaskInfo({...newTaskInfo, description: newDescription})
  }

  const onColumnChange = (columnName:string) => {
    setNewTaskColumn(columnName)

  }

  const onSaveButtonClick = () => {
    const newTask = {...newTaskInfo, subtasks:subtasks}
    editTask(newTask)
    setCurrentTask(newTask)
    replaceTask(newTaskColumn)
    setIsEditTaskModal(false)
  }

  return (
    <div className={`${styles.wrapper}`}>
      <p className="heading_L">Edit Task</p>
      <Input label="Title" name="title" placeHolder="e.g. Take coffee break" value={newTaskInfo.taskName} onChange={onTitleChange} />
      <Input
        label="Description"
        name="description"
        placeHolder="e.g. It’s always good to take a break. This 15 minute break will 
      recharge the batteries a little."
      value={newTaskInfo.description}
      onChange={onDescriptionChange}
      />
      <div className={`${styles.subtasks} text_bold`}>
        Subtasks
        {subtasks.map((subtask) => (
          <Input
            name={subtask.id}
            removable={true}
            placeHolder="e.g. Take coffee break"
            key={subtask.id}
            value={subtask.name}
            onChange={onSubtaskChange}
            onDelete={onSubtaskDelete}
          />
        ))}
        <Button mode="secondary"  onClick={onSubtaskAdd}>+Add New Subtask</Button>
      </div>
      <Dropdown label="Status" options={[...columnList]} onOptionChange={onColumnChange} defaultOption={currentColumn}/>
      <Button onClick={onSaveButtonClick}>Save Changes</Button>
    </div>
  );
};

export default EditTask;
