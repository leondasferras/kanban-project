import styles from "./header.module.css";
import logoLight from "../../assets/logo-light.svg";
import Button from "../../ui/Button/button";
import Menu from '../../assets/icon-vertical-ellipsis.svg'

const Header = () => {
  return (
    <header className= {styles.header}>
      <div className={styles.logo}>
        <img src={logoLight} />
      </div>
      <div className={styles.wrapper}>
        <h1 className={` heading_XL`}>Platform Launch</h1>
        <div className={styles.buttons}>
          <Button size="large">+ Add New Task</Button>
          <img className={styles.menuBtn} src={Menu} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
