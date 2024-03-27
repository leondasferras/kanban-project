import { nanoid } from "nanoid";
import styles from "./newTask.module.css";
import Input from "../../../../ui/Input/input";
import Button from "../../../../ui/Button/button";
import Dropdown from "../../../../ui/Dropdown/dropdown";
import { useState } from "react";
import useTasks from "../../../../services/store";

const Newtask = () => {
  const { currentBoard, boards, setNewTask } = useTasks();
  const columnList = boards
    .find((board) => board.boardName === currentBoard)
    .columns.map((column) => column.columnName);

  const [subtasks, setSubtasks] = useState([
    { id: nanoid(), name: "sub1", isDone: false },
    { id: nanoid(), name: "sub2", isDone: false },
    { id: nanoid(), name: "sub3", isDone: false },
  ]);

  const [newTaskInfo, setNewTaskInfo] = useState({taskName:'', description:''});
  const [newTaskColumn, setNewTaskColumn] = useState('');

  const onSubtaskChange = (e) => {
   const newSubtasks = [...subtasks]
   const subtaskToChange = newSubtasks.find(subtask => subtask.id === e.target.name)
   subtaskToChange.name = e.target.value
   setSubtasks(newSubtasks)
  };

  const onSubtaskDelete = (e) => {
    const newSubtasks = [...subtasks]
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

  const onCreateButtonClick = () => {
    const newTask = {...newTaskInfo, subtasks:subtasks}
    setNewTask(newTask, newTaskColumn)
  }

  return (
    <div className={`${styles.wrapper}`}>
      <p className="heading_L">Add New Task</p>
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
            onChange={onSubtaskChange}
          />
        ))}
        <Button mode="secondary" >+Add New Subtask</Button>
      </div>
      <Dropdown label="Status" options={[...columnList]} onOptionChange={onColumnChange}/>
      <Button onClick={onCreateButtonClick}>Create Task</Button>
    </div>
  );
};

export default Newtask;
