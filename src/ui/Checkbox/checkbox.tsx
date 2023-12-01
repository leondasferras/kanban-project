import styles from "./checkbox.module.css"
import styled from "styled-components"


const StyledWrapper = styled.label`

border-radius: 4px;
height: 40px;
padding: 12px;
box-sizing: border-box;
background-color: var(--light-grey);
border: none;
outline: none;
display: flex;
color: var(--black);
flex-direction: row;
&:hover {
  background-color: rgba(99, 95, 199, .25);
}

`
const Checkbox = () => {
  return (
    <StyledWrapper className="text-bold"> 
        <input type="checkbox" />
        <span className={styles.realCheck}></span>
        <div className="text_bold">myCheckbox</div>

    </StyledWrapper>
  )
}



export default Checkbox;