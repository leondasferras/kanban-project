import "./app.module.css"

import Header from'../header/header'
import Sidebar from "../sidebar/sidebar"
import Main  from "../main/main"
import ColumnsSection from "../mainSection/columnsSection"
import useTasks from "../../services/store"
import { useEffect, useState } from "react"


function App() {

const {boards, setCurrentBoard} = useTasks()
const [currentBoard, setCurrentTasks] = useState(boards[0])
const boardsNames = boards.map((board) => board.boardName)

 
useEffect(() => {
  setCurrentBoard(boards[0].boardName)
}, [])

  return (
    <>
     <Header/>
     <Main>
       <Sidebar/>
       <ColumnsSection/>
     </Main>


    </>
  )
}

export default App
