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
import DeleteModal from "../modal/modals/deleteModal/deleteModal"
import NewBoard from "../modal/modals/newBoard/newBoard"


function App() {

const {boards, setCurrentBoard, currentTask, setCurrentTask, isNewTask, setIsNewTask, isDeleteTask, setIsDeleteTask, setisTaskOpened, isTaskOpened, deleteTask, isEditBoardModal: isNewBoardModal, setIsNewBoardModal} = useTasks()
const [currentBoard, setCurrentTasks ] = useState(boards[0])
const boardsNames = boards.map((board) => board.boardName)

const onCancelDeletion = () => {
  setisTaskOpened(true)
  setIsDeleteTask(false)
}

const onDelete = () => {
  deleteTask()
  setCurrentTask('')
  setIsDeleteTask(false)
}


 
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

    {
    currentTask && isTaskOpened && <Modal onClose={() => setCurrentTask('')}> <OpenTask/> </Modal> 
    }

    {
      isNewTask && <Modal onClose = {() => setIsNewTask(false)}> <Newtask/> </Modal>
    }

    {
      isDeleteTask && <Modal onClose = {() => setIsDeleteTask(false)}> <DeleteModal onDelete={onDelete} onCancel = {onCancelDeletion}/> </Modal>
    }

    {
      isNewBoardModal && <Modal onClose = {() => setIsNewBoardModal(false)}> <NewBoard/></Modal>
    }
    </>
  )
}

export default App
