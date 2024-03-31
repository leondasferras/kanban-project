import Column from '../column/column';
import styles from './columnsSection.module.css';
import useTasks from '../../services/store';
import Button from '../../ui/Button/button';
import styled from 'styled-components';


const StyledColumnsSection = styled.section<{$isDarkTheme?:boolean}> `
  display: flex;
  flex-direction: row;
  background-color: ${props => props.$isDarkTheme ? 'var(--very-dark-gray)' : 'var(--light-grey)'};
  gap: 20px;
  justify-content: flex-start;
  padding-left: 24px;
  width: auto;
  height: 100%;
  overflow-x: scroll;
`
const StyledNewColumnBtn = styled.div<{$isDarkTheme?:boolean}> `
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  background-color: ${props => props.$isDarkTheme ? 'var(--dark-gray)':'var(--white)'};
  border-radius: 8px;
  color: var(--medium-grey);
  width: 280px;
  cursor: pointer;
  min-width: 280px;
`

const ColumnsSection = () => {

const {currentBoard, setIsEditBoardModal, boards,isDarkTheme} = useTasks();
const columns = boards.find((board) => board.boardName === currentBoard)?.columns;


  return (
    columns && columns?.length > 0 ?
    (<StyledColumnsSection $isDarkTheme={isDarkTheme}>
      {columns?.map((column) => <Column column={column} key={column.id}/>)}
      <StyledNewColumnBtn className={`heading_XL`} onClick={() => setIsEditBoardModal(true)} $isDarkTheme={isDarkTheme}>  + New column </StyledNewColumnBtn>
    </StyledColumnsSection>) : 
        <div className = {`${styles.emptyBoardSection} heading_L`}>
          <p className={styles.emptyBoardTitle}>This board is empty. Create a new column to get started.</p>
          <div onClick={() => setIsEditBoardModal(true)}><Button children='+ Add New Column'/></div>
        </div>
  )
}

export default ColumnsSection;