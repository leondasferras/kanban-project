import { ChangeEvent, FC } from "react";
import styles from "./sidebar.module.css";
import { ThemeSwitch } from "../themeSwitch/themeSwitch";
import useTasks from "../../services/store";
import { IBoard } from "../../services/store";




const Sidebar:FC= () => {
  const {currentBoard, boards, setCurrentBoard} = useTasks();
  const boardsNames = boards.map((board:IBoard) => board.boardName)

  const onBoardChange = (e:any) => {
    setCurrentBoard(e.currentTarget.value)
  }

  return (
    <div className={styles.sidebar}>
      <div className={`${styles.boardsCounter} text_medium`}>
        ALL BOARDS (3)
      </div>

      <ul className={styles.boardList}>
        { boardsNames.map((name:string, i:number) => {

          return <li key={i}>
            <input onChange={onBoardChange} id ={name} type="radio" value={name} name="board" checked={currentBoard === name} />
            <label className={`${styles.label} heading_M`} htmlFor={name}>
              <div className={styles.icon}></div>
              {name}
            </label>
          </li>;
        })}

      </ul>
      <ThemeSwitch />
      <div className={`${styles.hideSidebarBtn} heading_M`}>
        <div className={styles.hideIcon}></div>
        Hide Sidebar
      </div>
    </div>
  );
};

export default Sidebar;
