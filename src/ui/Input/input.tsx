import styled from "styled-components";
import styles from "./input.module.css";




const StyledInput = styled.input `
  min-height: 40px;
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
  removable?:boolean,

}


const Input:React.FC<InputProps> = () => {
  return (
    <div className={`${styles.wrapper} text_bold`}>
    <label className={styles.label}> label </label>
    <StyledInput className="text_medium" placeholder="type some shit"/>
    </div>
  )
}



export default Input