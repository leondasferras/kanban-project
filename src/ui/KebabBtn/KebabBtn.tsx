import { FC, useState } from "react";
import styled from "styled-components";
import styles from "./KebabBtn.module.css";
import useTasks from "../../services/store";


const StyledWrapper = styled.div<{$isDarkTheme?:boolean}> `
  position: relative; 
  background-color: ${props => props.$isDarkTheme ? 'var(--dark-gray)':'var(--white)'};
  color:${props => props.$isDarkTheme ? 'var(--white)':'var(--black)'};
`

type TKebabBtnProps = {
  onEdit:()=>void;
  onDelete: () => void;
  subject: string;
  position?:string;
}

const KebabBtn:FC<TKebabBtnProps> = ({ onEdit, onDelete, subject, position }) => {
  const [isKebabOpen, setIsKebabOpen] = useState(false);
  const { isDarkTheme } = useTasks();

  return (
    <StyledWrapper className={styles.wrapper} $isDarkTheme={isDarkTheme}>
      <div
        className={styles.menuBtn}
        onClick={() => setIsKebabOpen((prev) => !prev)}
      ></div>
      {isKebabOpen && (
        <ul
          className={`${styles.dropDown} text_medium`}
          onMouseLeave={() => setIsKebabOpen(false)}
          style={position === 'header' ? {right:'10px',} : undefined}
        >
          <li className={styles.editButton} onClick={()=> {onEdit();setIsKebabOpen(false)}}>
            Edit {subject}
          </li>
          <li className={styles.deleteButton} onClick={() => {onDelete(); setIsKebabOpen(false)}}>
            {" "}
            Delete {subject}
          </li>
        </ul>
      )}
    </StyledWrapper>
  );
};

export default KebabBtn;
