import styles from "./newTask.module.css";
import Input from "../../../../ui/Input/input";
import Button from "../../../../ui/Button/button";
import Dropdown from "../../../../ui/Dropdown/dropdown";
const Newtask = () => {
  return (
    <div className={`${styles.wrapper}`}>
      <p className="heading_L">Add New Task</p>
      <Input label="Title" placeHolder="e.g. Take coffee break" />
      <Input
        label="Description"
        placeHolder="e.g. It’s always good to take a break. This 15 minute break will 
      recharge the batteries a little."
      />
      <div className={`${styles.subtasks} text_bold`}>
        Subtasks
        <Input removable = {true} placeHolder="e.g. Take coffee break" />
        <Input removable = {true} placeHolder="e.g. Take coffee break" />
        <Input removable = {true} placeHolder="e.g. Take coffee break" />
        <Button mode='secondary'>+Add New Subtask</Button>
      </div> 
        <Dropdown label="Status" options={['todo', 'todo', 'todo','todo']}/>
        <Button>Create Task</Button>
    </div>
  );
};

export default Newtask;
