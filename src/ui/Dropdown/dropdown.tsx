import { EventHandler, useState } from 'react';
import styled from 'styled-components';
import styles from './dropdown.module.css'



const StyledDropdownButton = styled.button `
  padding:16px;
  min-height: 40px;
  width: 100%;
  background-color: var(--white);
  border-radius: 4px;
  border: 1px solid rgba(130, 143, 163, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: inherit;
  font: inherit;

`

const StyledDropdownContainer = styled.ul `
  border-radius: 8px;
  padding: 16px; 
  background-color: var(--white);
  gap: 8px;
  color: var(--black);
`


type DropdownProps = {
  options: Array<string>,
  label?: string,
  defaultOption?:string;
  onOptionChange?: (string) => void,

}

const Dropdown:React.FunctionComponent<DropdownProps> = ({options, label, defaultOption, onOptionChange}) => {

  const [isOpen, setIsOpen] = useState(false)
  const [currentOption, setCurrentOption] = useState(defaultOption)

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
  <div className="text_bold dropdown" onMouseLeave = {()=> setIsOpen(false)}>
  <StyledDropdownButton onClick = {handleToggleDropdown} > {currentOption}
  <div className={styles.icon}></div>
  </StyledDropdownButton>
    {
    isOpen &&
  <StyledDropdownContainer onClick={(e) => handlePickOption(e)}>
    {options.map((option, i) => <li className={styles.dropdownItem} key = {i}>{option}</li>)}
  </StyledDropdownContainer>
    }
  
  </div>
</div>
  )
}


export default Dropdown 