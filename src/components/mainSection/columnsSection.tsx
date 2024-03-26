import Column from '../column/column';
import styles from './columnsSection.module.css';
import useTasks from '../../services/store';


const ColumnsSection = () => {

const currentBoard = useTasks((state) => state.currentBoard)
const columns = useTasks((state) => state.boards.find((board) => board.boardName === currentBoard)?.columns)


  return (
    <section className={styles.columnsSection}>
      {columns?.map((column) => <Column column={column}/>)}

      <div className={`${styles.addColumnBtn} heading_XL`}>  + New column </div>
    </section>
  )
}

export default ColumnsSection;