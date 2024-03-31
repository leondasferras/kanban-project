

import styled from "styled-components"
import styles from './themeSwitch.module.css'
import { useState } from "react"
import useTasks from "../../services/store"

const StyledThemeSwitch = styled.div<{$isDarkTheme?:boolean}> `
  background: ${props => props.$isDarkTheme ? 'var(--very-dark-gray)' : 'var(--light-grey)'};
  width: 100%;
  margin-bottom: 10px;
  padding: 14px 66px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  
  @media screen and ( max-width: 600px )
    {
      padding: 14px 5px;
      width: 100%
    }
  `




export const ThemeSwitch = () => {

  const { isDarkTheme, setIsDarkTheme } = useTasks();
  const [isDark, setIsDark] = useState(false);

  return (
    <StyledThemeSwitch $isDarkTheme={isDarkTheme}>
      <div className={`${styles.lightThemeIcon}`}/>
      <input type="checkbox" id="theme" onChange={()=> setIsDarkTheme(!isDarkTheme)} checked={isDarkTheme}/>
        <label htmlFor="theme" className={styles.switchContainer}>
            <div className={styles.switchCircle}></div>
        </label>
      <div className={`${styles.darkThemeIcon}`}/>
    </StyledThemeSwitch>
  )
}
