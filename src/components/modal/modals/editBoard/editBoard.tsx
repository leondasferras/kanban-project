import styles from "./editBoard.module.css";
import Input from "../../../../ui/Input/input";
import Button from "../../../../ui/Button/button";
import { useState } from "react";
import { nanoid } from "nanoid";
import useTasks from "../../../../services/store";

const EditBoard = () => {
  const { setIsEditBoardModal, currentBoard, boards, editBoard, setCurrentBoard  } = useTasks();
  const [name, setName] = useState(currentBoard);
  const [columns, setColumns] = useState(boards.find( board => board.boardName === currentBoard).columns);


  const onNameChange = (e) => {
    setName(e.target.value)
  }

  const onColumnChange = (e) => {
    const newColumns = [...columns]
    const currentColumn = newColumns.find(column => column.id === e.target.name)
    currentColumn!.columnName = e.target.value
    setColumns([...newColumns])
  }

  const onColumnAdd = () => {
    const newColumns = [...columns]
    const newColumn = {id:nanoid(), columnName: '', tasks:[]}
    newColumns.push(newColumn)
    setColumns([...newColumns])
  }

  const onColumnRemove = (e) => {
    const newColumns = [...columns]
    const columnToRemove = newColumns.findIndex(column => column.id === e.target.dataset.id)
    newColumns.splice(columnToRemove,1)
    setColumns([...newColumns])
  }

  const onBoarEdit = () => {
    const newBoard = {boardName:name, columns:columns}
    editBoard(newBoard)
    setCurrentBoard(newBoard.boardName)
    setIsEditBoardModal(false)

  }

  return (
    <div className={styles.wrapper}>
      <p className="heading_L">Edit Board</p>
      <Input
        label="Board Name"
        placeHolder="e.g. Web Design"
        value={name}
        onChange={onNameChange}
      ></Input>
      <div className="text_bold">
        Board Columns
        {columns.map((column, i) => (
          <Input key={i} removable value={column.columnName} name={column.id} onChange={onColumnChange} onDelete={onColumnRemove}></Input>
        ))}
      </div>
      <Button mode="secondary" onClick={onColumnAdd}>+ Add New Column</Button>
      <Button onClick={onBoarEdit}> Save Changes</Button>
    </div>
  );
};

export default EditBoard;