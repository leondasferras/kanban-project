import { useState } from "react";
import styles from "./header.module.css";
import logoLight from "../../assets/logo-light.svg";
import Button from "../../ui/Button/button";
import Menu from '../../assets/icon-vertical-ellipsis.svg'
import useTasks from "../../services/store";


const Header = () => {

  const {setIsNewTask} = useTasks()
  const onNewTaskBtnClick = () => {
    setIsNewTask(true)
  }

  const [isKebabOpen, setIsKebabOpen] = useState(false)
  const currentBoard = useTasks((state) => state.currentBoard)
  return (
    <header className= {styles.header}>
      <div className={styles.logo}>
        <img src={logoLight} />
      </div>
      <div className={styles.wrapper}>
        <h1 className={` heading_XL`}>{currentBoard}</h1>
        <div className={styles.buttons}>
          <Button onClick ={onNewTaskBtnClick} size="large">+ Add New Task</Button>
          <img className={styles.menuBtn} src={Menu} alt="" onClick={()=> setIsKebabOpen((prev => !prev))} />
          { isKebabOpen 
              && 
          <ul className={`${styles.dropDown} text_medium`}>
            <li className={styles.editButton}>Edit Board</li>
            <li className={styles.deleteButton}> Delete Board</li>
          </ul>
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
