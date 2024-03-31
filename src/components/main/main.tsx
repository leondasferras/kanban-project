import styles from "./main.module.css"

const Main = ({children}:any) => {
  return (
    <main className={styles.main}>
      {children}
    </main>
  )
}

export default Main