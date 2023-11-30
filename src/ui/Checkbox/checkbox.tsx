import styles from "./checkbox.module.css"
import styled from "styled-components"


const StyledWrapper = styled.div`

border-radius: 4px;
height: 40px;
padding: 12px;
box-sizing: border-box;
background-color: var(--light-grey);
border: none;
outline: none;


`




const Checkbox = () => {
  return (
    <StyledWrapper> 
      <label >
        <input type="checkbox" />
        <span className={styles.realCheck}></span>
        myCheckbox
      </label>

    </StyledWrapper>
  )
}



export default Checkbox;