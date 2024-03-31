import { ChangeEvent } from "react";
import styled from "styled-components";
import styles from "./input.module.css";
import useTasks from "../../services/store";


const StyledInputWrapper = styled.div<{$isDarkTheme?:boolean}>  `
  display: flex;
  flex-direction: column;
  gap: 8px;
  background-color: inherit;
  color:${props => props.$isDarkTheme ? 'var(--white)':'var(--black)'};
  `


const StyledInput = styled.input<{$isDarkTheme?:boolean}>`
  color:${props => props.$isDarkTheme ? 'var(--white)':'var(--black)'};
  background-color: ${props => props.$isDarkTheme ? 'var(--dark-gray)':'var(--white)'};
  min-height: 40px;
  width: 100%;
  outline: none;
  border: 1px solid rgba(130, 143, 163, 0.25);
  border-radius: 4px;
  box-sizing: border-box;
  padding: 0 16px;
  &::placeholder {
    color: var(--medium-grey);
  }
`



type InputProps = {
  label?: string,
  removable?: boolean,
  placeHolder?: string,
  value?: string;
  onChange?: (e:ChangeEvent<HTMLInputElement>) => void;
  onDelete?: any;
  name?: string;

}


const Input:React.FC<InputProps> = ({label, removable, placeHolder, onChange, onDelete, name, value}) => {

  const { isDarkTheme } = useTasks()

  return (
    <StyledInputWrapper className={`text_bold`} $isDarkTheme={isDarkTheme}>
    <label>{label} </label>
    <div className={styles.inputWrapper}>
      <StyledInput className="text_medium" placeholder={placeHolder} onChange={onChange} name={name} value={value} $isDarkTheme={isDarkTheme} />
      { removable && <div data-id={name} onClick={onDelete} className={styles.deleteBtn}></div>}
    </div>
    </StyledInputWrapper>
  )
}



export default Input