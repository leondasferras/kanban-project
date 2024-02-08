import styles from "./newBoard.module.css";
import Input from "../../../../ui/Input/input";
import Button from "../../../../ui/Button/button";

const NewBoard = () => {
  return (
    <div className={styles.wrapper}>
      <p className="heading_L">Add New Board</p>
      <Input label="Name" placeHolder="e.g. Web Design"></Input>
      <div>
        <Input label="Columns" removable></Input>
        <Input removable></Input>
        <Input removable></Input>
      </div>
      <Button mode="secondary">+ Add New Column</Button>
      <Button> Create New Board</Button>

    </div>
  );
};

export default NewBoard;
