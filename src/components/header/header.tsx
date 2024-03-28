import { useState } from "react";
import styles from "./header.module.css";
import logoLight from "../../assets/logo-light.svg";
import Button from "../../ui/Button/button";
import Menu from '../../assets/icon-vertical-ellipsis.svg'
import useTasks from "../../services/store";
import KebabBtn from "../../ui/KebabBtn/KebabBtn";


const Header = () => {

  const {setIsNewTask, setIsEditBoardModal, setIsDeleteBoardModal } = useTasks()
  const onNewTaskBtnClick = () => {
    setIsNewTask(true)
  }

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
          <KebabBtn subject="board" onEdit={() => setIsEditBoardModal(true)} onDelete={() => setIsDeleteBoardModal(true)}/>

          
        </div>
      </div>
    </header>
  );
};

export default Header;
