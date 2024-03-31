import styles from "./newBoard.module.css";
import Input from "../../../../ui/Input/input";
import Button from "../../../../ui/Button/button";
import { ChangeEvent, useState } from "react";
import { nanoid } from "nanoid";
import useTasks from "../../../../services/store";

const NewBoard = () => {
  const [name, setName] = useState("");
  const [columns, setColumns] = useState([{ id: nanoid(), columnName:'', tasks:[]}, { id: nanoid(), columnName:'', tasks:[]}, { id: nanoid(), columnName:'',  tasks:[]}]);
  const { setNewBoard, setIsNewBoardModal } = useTasks();

  const onNameChange = (e:ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const onColumnChange = (e:ChangeEvent) => {
    const newColumns = [...columns]
    if (!(e.target instanceof HTMLInputElement)) return;
    const currentColumn = newColumns.find(column => column.id === (e.target as HTMLInputElement).name)
    currentColumn!.columnName = e.target?.value
    setColumns([...newColumns])
  }

  const onColumnAdd = () => {
    const newColumns = [...columns]
    const newColumn = {id:nanoid(), columnName: '', tasks:[]}
    newColumns.push(newColumn)
    setColumns([...newColumns])
  }

  const onColumnRemove = (e:MouseEvent) => {
    const newColumns = [...columns]
    const columnToRemove = newColumns.findIndex(column => column.id === (e.target as HTMLInputElement).dataset.id)
    newColumns.splice(columnToRemove,1)
    setColumns([...newColumns])
  }

  const onBoardAdd = () => {
    const newBoard = {boardName:name, columns:columns, id:nanoid()}
    setNewBoard(newBoard)
    setIsNewBoardModal(false)

  }

  return (
    <div className={styles.wrapper}>
      <p className="heading_L">Add New Board</p>
      <Input
        label="Name"
        placeHolder="e.g. Web Design"
        value={name}
        onChange={onNameChange}
      ></Input>
      <div className="text_bold">
        Columns
        {columns.map((column, i) => (
          <Input key={i} removable value={column.columnName} name={column.id} onChange={onColumnChange} onDelete={onColumnRemove}></Input>
        ))}
      </div>
      <Button mode="secondary" onClick={onColumnAdd}>+ Add New Column</Button>
      <Button onClick={onBoardAdd}> Create New Board</Button>
    </div>
  );
};

export default NewBoard;
