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
const Checkbox = ({title, onChange}) => {
  return (
    <StyledWrapper className="text-bold"> 
        <input onChange={onChange} type="checkbox" name={title} />
        <span className={styles.realCheck}></span>
        <div className="text_bold">{title}</div>

    </StyledWrapper>
  )
}



export default Checkbox;