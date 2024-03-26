import { useState } from "react"

import styles from './KebabBtn.module.css'

const KebabBtn = () => {

  const [isKebabOpen, setIsKebabOpen] = useState(false)

  return (
    <div className={styles.wrapper}>
      <div className={styles.menuBtn} onClick={()=> setIsKebabOpen((prev => !prev))}></div>
{  isKebabOpen && <ul className={`${styles.dropDown} text_medium`}>
          <li className={styles.editButton}>Edit Task</li>
          <li className={styles.deleteButton}> Delete Task</li>
    </ul>}
  </div>
  )
}

export default KebabBtn