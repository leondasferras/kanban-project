//@ts-nocheck
import { useEffect } from "react";
import styled from "styled-components";
import styles from "./header.module.css";
import logoLight from "../../assets/logo-light.svg";
import logoDark from "../../assets/logo-dark.svg";
import addTaskIcon from "../../assets/icon-add-task-mobile.svg";
import Button from "../../ui/Button/button";
import useTasks from "../../services/store";
import KebabBtn from "../../ui/KebabBtn/KebabBtn";
import useWindowSize from "../../services/useWindowSize";
import mobileLogo from "../../assets/logo-mobile.svg";
import chevronDown from "../../assets/icon-chevron-down.svg";
import chevronUp from "../../assets/icon-chevron-up.svg";


const StyledHeader = styled.header<{$isDarkTheme?:boolean}> `
  display: flex;
  align-items: center;
  background-color: ${props => props.$isDarkTheme ? 'var(--dark-gray)':'var(--white)'};
  flex: 0 1 auto;
  color:${props => props.$isDarkTheme ? 'var(--white)':'var(--black)'};
`

const StyledWrapper = styled.div<{$isDarkTheme?:boolean}> `
  width: 100%;
  padding: 29px 30px 29px 24px;
  border-left: 1px solid ${props => props.$isDarkTheme ? 'var(--lines-dark)' : 'var(--lines-light)'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.$isDarkTheme ? 'var(--lines-dark)' : 'var(--lines-light)'};

  @media screen and ( max-width: 600px ) {
    border: none;
    padding: 10px;
    padding-left:0;
  }
`
const StyledLogoWrapper = styled.div<{$isDarkTheme?:boolean}> `
  box-sizing: border-box;
  padding: 0 114px 0 34px;
  height: 100%;
  display: flex;
  align-items: center ;
  border-bottom: 1px solid var(--lines-light);
  border-bottom: 1px solid ${props => props.$isDarkTheme ? 'var(--lines-dark)' : 'var(--lines-light)'};

  @media screen and ( max-width: 600px ) {
    border: none;
    padding: 20px
  }
`

const Header = () => {

  const {setIsNewTask, setIsEditBoardModal, setIsDeleteBoardModal, setIsSidebarShown, isSidebarShown, isDarkTheme } = useTasks()
  const [width] = useWindowSize();  

  const onNewTaskBtnClick = () => {
    setIsNewTask(true)
  }

  useEffect( () => {
    if(width < 600) setIsSidebarShown(false)
  }, [width])

  const currentBoard = useTasks((state) => state.currentBoard)

  return (
    <StyledHeader $isDarkTheme={isDarkTheme}>
      <StyledLogoWrapper $isDarkTheme={isDarkTheme}>
        {/* //@ts-ignore */}
        <img src={width < 600 ? mobileLogo: isDarkTheme ? logoDark: logoLight} />
      </StyledLogoWrapper>
      <StyledWrapper $isDarkTheme={isDarkTheme} className={styles.wrapper}>
        <h1 className={ `heading_XL ${styles.title}`}>{currentBoard}
        {width < 600 ? <div onClick={() => setIsSidebarShown(!isSidebarShown)}><img src={isSidebarShown? chevronUp : chevronDown} /></div> : null}</h1>

        <div className={styles.buttons}>
          <Button onClick ={onNewTaskBtnClick} size="large">{width > 680? '+ Add New Task' : <img src={addTaskIcon}/>}</Button>
          <KebabBtn subject="board" onEdit={() => setIsEditBoardModal(true)} onDelete={() => setIsDeleteBoardModal(true)} position="header"/>

          
        </div>
      </StyledWrapper>
    </StyledHeader>
  );
};

export default Header;
