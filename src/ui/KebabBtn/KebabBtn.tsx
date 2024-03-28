import { useState } from "react"

import styles from './KebabBtn.module.css'

const KebabBtn = ({onEdit, onDelete, subject}) => {

  const [isKebabOpen, setIsKebabOpen] = useState(false)

  return (
    <div className={styles.wrapper}>
      <div className={styles.menuBtn} onClick={()=> setIsKebabOpen((prev => !prev))}></div>
{  isKebabOpen && <ul className={`${styles.dropDown} text_medium`}>
          <li className={styles.editButton} onClick={onEdit} >Edit {subject}</li>
          <li className={styles.deleteButton} onClick={onDelete}> Delete {subject}</li>
    </ul>}
  </div>
  )
}

export default KebabBtn