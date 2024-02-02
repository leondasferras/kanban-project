import styles from "./main.module.css"
import Column from "../column/column"

const Main = ({children}:any) => {
  return (
    <main className={styles.main}>
      {children}
      <section className={styles.columnsSection}>
        <Column/>
        <Column/>
        <Column/>
        <div className={`${styles.addColumnBtn} heading_XL`}>  + New column </div>
      </section>
    </main>
  )
}

export default Main