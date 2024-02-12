import styles from "./sidebar.module.css";
import { ThemeSwitch } from "../themeSwitch/themeSwitch";
import { FC } from "react";

type TSidebar = {
  boards: Array<string>
}

const Sidebar:FC<TSidebar>= ({ boards }) => {
  return (
    <div className={styles.sidebar}>
      <div className={`${styles.boardsCounter} text_medium`}>
        ALL BOARDS (3)
      </div>

      <ul className={styles.boardList}>
        { boards.map((name) => {

          return <li>
            <input type="radio" id={name} name="board" />
            <label className={`${styles.label} heading_M`} htmlFor="board">
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
