import styles from "./main.module.css"
import Column from "../column/column"

const Main = ({children}:any) => {
  return (
    <main className={styles.main}>
      {children}
    </main>
  )
}

export default Main