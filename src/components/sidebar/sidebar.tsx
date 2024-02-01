
import styles from './sidebar.module.css'
import { ThemeSwitch } from '../themeSwitch/themeSwitch';


 const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={`${styles.boardsCounter} text_medium`}>ALL BOARDS (3)</div>
      <ul className={styles.boardList}>
        <li>
        <input type="radio" id='board' name='board'/>
        <label className={`${styles.label} heading_M`} htmlFor="board">
            <div className={styles.icon}></div>
            Platform Launch
        </label>
        </li>
        <li>
        <input type="radio" id='board2' name='board' />
          <label className={`${styles.label} heading_M`} htmlFor="board2">
            <div className={styles.icon}></div>
            Platform Launch
          </label>
        </li>
      </ul>
      <ThemeSwitch/>
      <div className={`${styles.hideSidebarBtn} heading_M`}>
        <div className={styles.hideIcon}></div>
        Hide Sidebar
      </div>
    </div>
  )
}


export default Sidebar;