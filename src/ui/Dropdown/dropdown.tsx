import { useState } from 'react';
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

`

const StyledDropdownContainer = styled.ul `
  border-radius: 8px;
  padding: 16px; 
  background-color: salmon;
  gap: 8px;
`




type DropdownProps = {
  options: Array<string>,

}

const Dropdown:React.FunctionComponent<DropdownProps> = ({options}) => {

  const [isOpen, setIsOpen] = useState(false)
  const [currentOption, setCurrentOption] = useState(options[0])

const handleToggleDropdown = () => {
  setIsOpen((prev) => !prev)
}

const handlePickOption = (e) => {
  console.log(e)
  if(e.target.nodeName === "LI"){
  setCurrentOption(e.target.textContent)
  setIsOpen(false)}
  else return
} 

  return (
<div className="dropdown text_medium" onMouseLeave = {()=> setIsOpen(false)}>
<StyledDropdownButton onClick = {handleToggleDropdown} > {currentOption} 
    <div className={styles.icon}></div>
</StyledDropdownButton>
  {
  isOpen && 
    <StyledDropdownContainer onClick={(e) => handlePickOption(e)}>
      {options.map((option, i) => <li className={styles.dropdownItem} key = {i}> {option} </li>)}
    </StyledDropdownContainer>
  }

</div>
  )
}


export default Dropdown 