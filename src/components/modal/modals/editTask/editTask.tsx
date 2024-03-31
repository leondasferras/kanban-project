import { nanoid } from "nanoid";
import { ChangeEvent, useState } from "react";
import styles from "./editTask.module.css";
import Input from "../../../../ui/Input/input";
import Button from "../../../../ui/Button/button";
import Dropdown from "../../../../ui/Dropdown/dropdown";
import useTasks from "../../../../services/store";

const EditTask = () => {
  const { currentBoard, boards, currentTask, currentColumn, editTask, replaceTask, setIsEditTaskModal, setCurrentTask } = useTasks();
  const columnList = boards
    .find((board) => board.boardName === currentBoard)
    ?.columns.map((column) => column.columnName);

  const [subtasks, setSubtasks] = useState(currentTask.subtasks);

  const [newTaskInfo, setNewTaskInfo] = useState({taskID:currentTask.taskID, taskName:currentTask.taskName, description:currentTask.description});
  const [newTaskColumn, setNewTaskColumn] = useState<string | null>(null);

  const onSubtaskChange = (e:ChangeEvent<HTMLInputElement>) => {
   const newSubtasks = [...subtasks]
   const subtaskToChange = newSubtasks.find(subtask => subtask.id === e.target.name)
   subtaskToChange!.name = e.target.value
   setSubtasks(newSubtasks)
  };

  const onSubtaskDelete = (e:MouseEvent) => {
    const newSubtasks = [...subtasks]
    const subtaskToDelete = newSubtasks.findIndex((subtask) => 
    {
      if (!(e.target instanceof HTMLElement)) return
      subtask.id === e.target?.dataset.id
      
    })

    newSubtasks.splice(subtaskToDelete, 1)
    setSubtasks(newSubtasks)
  }

  const onSubtaskAdd = () => {
    const newSubtasks = [...subtasks]
    newSubtasks.push({id:nanoid(), isDone: false, name:''})
    setSubtasks(newSubtasks)
  }

  const onTitleChange = (e:ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value 
    setNewTaskInfo({...newTaskInfo, taskName: newTitle})
  }

  const onDescriptionChange = (e:ChangeEvent<HTMLInputElement>) => {
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
    console.log('cur',currentColumn,'new', newTaskColumn)
    if (currentColumn !== newTaskColumn && newTaskColumn !== null ) {replaceTask(newTaskColumn);
    }
    setIsEditTaskModal(false)}


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
      <Dropdown label="Status" options={[...columnList!]} onOptionChange={onColumnChange} defaultOption={currentColumn}/>
      <Button onClick={onSaveButtonClick}>Save Changes</Button>
    </div>
  );
};

export default EditTask;
