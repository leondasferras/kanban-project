import { useState } from 'react';
import styled from 'styled-components';
import styles from './dropdown.module.css'
import useTasks from '../../services/store';



const StyledDropdownButton = styled.button<{$isDarkTheme?:boolean}>`
  padding: 16px;
  min-height: 40px;
  width: 100%;
  background-color: ${props => props.$isDarkTheme ? 'var(--dark-gray)':'var(--white)'};
  border-radius: 4px;
  border: 1px solid rgba(130, 143, 163, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: inherit;
  font: inherit;
  cursor: pointer;

`

const StyledDropdownContainer = styled.ul<{$isDarkTheme?:boolean}> `
  width: 93%;
  border-radius: 8px;
  padding: 16px; 
  background-color: inherit;
  gap: 8px;
  background-color: ${props => props.$isDarkTheme ? 'var(--dark-gray)':'var(--white)'};
  position: absolute;
  top:0px;
  left:0;
  
`


type DropdownProps = {
  options: Array<string>,
  label?: string,
  defaultOption?:string;
  onOptionChange?: (arg:string) => void,

}

const Dropdown:React.FunctionComponent<DropdownProps> = ({options, label, defaultOption, onOptionChange}) => {

  const [isOpen, setIsOpen] = useState(false)
  const [currentOption, setCurrentOption] = useState(defaultOption)
  const {isDarkTheme} = useTasks()

const handleToggleDropdown = () => {
  setIsOpen((prev) => !prev)
}

const handlePickOption = (e) => {
  if(e.target.nodeName !== "LI"){
    return
}
  else 
  setCurrentOption(e.target.textContent)
  setIsOpen(false)
  onOptionChange(e.target.textContent)

  
} 

  return (
<div className={styles.wrapper}>
  { label && <label className={`${styles.label} text_bold`}> {label} </label>}
  <div className={`text_bold ${styles.dropdown}`} onMouseLeave = {()=> setIsOpen(false)}>
  <StyledDropdownButton onClick = {handleToggleDropdown} $isDarkTheme = {isDarkTheme}> {currentOption}
  <div className={styles.icon}></div>
  </StyledDropdownButton>
    {
    isOpen &&
  <div style={{position:'relative'}}>
    <StyledDropdownContainer onClick={(e) => handlePickOption(e)} $isDarkTheme = {isDarkTheme}>
      {options.map((option, i) => <li className={styles.dropdownItem} key = {i}>{option}</li>)}
    </StyledDropdownContainer>
  </div>
    }
  
  </div>
</div>
  )
}


export default Dropdown 