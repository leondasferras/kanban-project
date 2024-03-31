import { FC } from "react";
import styles from "./sidebar.module.css";
import { ThemeSwitch } from "../themeSwitch/themeSwitch";
import useTasks from "../../services/store";
import { IBoard } from "../../services/store";
//@ts-ignore
import Icon  from '../../assets/icon-board.svg?react'
import useWindowSize from "../../services/useWindowSize";
import styled from "styled-components";


const StyledSidebar = styled.div<{$isDarkTheme?:boolean}>  `
margin-top:-1px;
min-width: 302px;
height: 100%;
box-sizing: border-box;
border-right: 1px solid ${props => props.$isDarkTheme ? 'var(--lines-dark)' : 'var(--lines-light)'};
padding: 15px 24px;
background-color: ${props => props.$isDarkTheme ? 'var(--dark-gray)' : 'var(--white)'};
display: flex;
flex-direction: column;
justify-content: space-between;

@media screen and ( max-width: 600px ) {
  width:auto;
  position: absolute;
  top: 10px;
  left: 20px;
  justify-content: flex-start;
  height: auto;
  border-radius:5px;
  box-shadow: 7px 5px 9px -5px  #000;
  z-index:9;

}
`
const Sidebar:FC= () => {
  const {currentBoard, boards, setCurrentBoard, setIsNewBoardModal, isSidebarShown, setIsSidebarShown, isDarkTheme} = useTasks();
  const boardsNames = boards.map((board:IBoard) => board.boardName)
  const [width] = useWindowSize()

  const onBoardChange = (e:any) => {
    setCurrentBoard(e.currentTarget.value)
  }

  return (
    isSidebarShown? ((<StyledSidebar $isDarkTheme={isDarkTheme} className={styles.sidebar} onMouseLeave={width < 600 ? () => setIsSidebarShown(false) : undefined }>
      <div>
        <div className={`${styles.boardsCounter} text_medium`}>
          ALL BOARDS ({boards.length})
        </div>
        <ul className={styles.boardList}>
          { boardsNames.map((name:string, i:number) => {
            return <li key={i}>
              <input onChange={onBoardChange} id ={name} type="radio" value={name} name="board" checked={currentBoard === name} />
              <label className={`${styles.label} heading_M`} htmlFor={name}>
                <div className={styles.icon}><Icon/></div>
                {name}
              </label>
            </li>;
          })}
        </ul>
          <div className={`${styles.createBoardBtn} heading_M`} onClick={() => setIsNewBoardModal(true)}>
                  <div className={`${styles.icon} ${styles.createBtnIcon}`}><Icon/></div>
                  +Create New Board
                </div>
      </div>
              
        <div>
          <ThemeSwitch />
{               width> 600 &&  <div className={`${styles.hideSidebarBtn } heading_M`} onClick={() => setIsSidebarShown(false)}>
          <div className={styles.hideIcon} ></div>
          Hide Sidebar
                </div>}
        </div>

    </StyledSidebar>)): width> 600 && <div className={styles.openSidebarBtn} onClick={() => setIsSidebarShown(true)}></div>
  );
};

export default Sidebar;
