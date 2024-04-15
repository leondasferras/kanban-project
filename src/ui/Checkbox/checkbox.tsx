import styles from "./checkbox.module.css"
import styled from "styled-components"
import { ChangeEvent, FC } from "react"
import useTasks from "../../services/store"


const StyledWrapper = styled.label<{$isDarkTheme?:boolean}>`

border-radius: 4px;
height: 40px;
padding: 12px;
box-sizing: border-box;
background-color: ${props => props.$isDarkTheme ? 'var(--dark-gray)':'var(--light-grey)'};
border: none;
outline: none;
display: flex;
color:${props => props.$isDarkTheme ? 'var(--white)':'var(--black)'};
flex-direction: row;
cursor: pointer;
&:hover {
  background-color: rgba(99, 95, 199, .25);
}

`
type Checkbox = {
  title: string;
  onChange: (e:ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  id: string;
}

const Checkbox:FC<Checkbox> = ({title, onChange, checked, id}) => {

  const { isDarkTheme } = useTasks();

  return (
    <StyledWrapper className="text-bold" $isDarkTheme = {isDarkTheme}> 
        <input onChange={onChange} type="checkbox" name={title} checked={checked} id={id} />
        <span className={styles.realCheck}></span>
        <div className="text_bold">{title}</div>

    </StyledWrapper>
  )
}



export default Checkbox;