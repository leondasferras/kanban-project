import styled from "styled-components";
import styles from "./input.module.css";




const StyledInput = styled.input `
  min-height: 40px;
  width: 100%;
  outline: none;
  border: 1px solid rgba(130, 143, 163, 0.25);
  border-radius: 4px;
  box-sizing: border-box;
  padding: 0 16px;
  &::placeholder {
    color: rgba(0, 1, 18, .25);
  }
`



type InputProps = {
  label?: string,
  removable?: boolean,
  placeHolder?: string,
  value?: string;
  onChange?: (e) => void;
  name?: string;

}


const Input:React.FC<InputProps> = ({label, removable, placeHolder, onChange, name}) => {

  return (
    <div className={`${styles.wrapper} text_bold`}>
    <label className={styles.label}> {label} </label>
    <div className={styles.inputWrapper}>
      <StyledInput className="text_medium" placeholder={placeHolder} onChange={onChange} name={name}/>
      { removable && <div className={styles.deleteBtn}></div>}
    </div>
    </div>
  )
}



export default Input