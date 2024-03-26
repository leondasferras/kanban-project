import "./app.module.css"

import Header from'../header/header'
import Sidebar from "../sidebar/sidebar"
import Main  from "../main/main"
import ColumnsSection from "../mainSection/columnsSection"
import useTasks from "../../services/store"
import { useEffect, useState } from "react"
import Modal from "../modal/modal"
import Newtask from "../modal/modals/newTask/newTask"
import OpenTask from "../modal/modals/openTask/openTask"


function App() {

const {boards, setCurrentBoard, currentTask} = useTasks()
const [currentBoard, setCurrentTasks ] = useState(boards[0])
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

    {currentTask && <Modal> 
      <OpenTask/>
    </Modal> }
    </>
  )
}

export default App
