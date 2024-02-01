

import styled from "styled-components"
import styles from './themeSwitch.module.css'
import { useState } from "react"

const StyledThemeSwitch = styled.div({
  background: "var(--light-grey)",
  width: '100%',
  padding: '14px 66px',
  borderRadius: '6px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: "border-box",
})



export const ThemeSwitch = () => {

  const [isDark, setIsDark] = useState('false')

  return (
    <StyledThemeSwitch>
      <div className={`${styles.lightThemeIcon}`}/>
      <input type="checkbox" id="theme"/>
        <label htmlFor="theme" className={styles.switchContainer}>
            <div className={styles.switchCircle}></div>
        </label>
      <div className={`${styles.darkThemeIcon}`}/>
    </StyledThemeSwitch>
  )
}
