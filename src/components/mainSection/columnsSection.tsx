import Column from '../column/column';
import styles from './columnsSection.module.css';


import React from 'react'

const ColumnsSection = () => {
  return (
    <section className={styles.columnsSection}>
      <Column/>
      <Column/>
      <Column/>
      <div className={`${styles.addColumnBtn} heading_XL`}>  + New column </div>
    </section>
  )
}

export default ColumnsSection;