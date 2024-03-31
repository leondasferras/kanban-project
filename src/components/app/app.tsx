import "./app.module.css"

import Header from'../header/header'
import Sidebar from "../sidebar/sidebar"
import Main  from "../main/main"
import ColumnsSection from "../mainSection/columnsSection"
import useTasks from "../../services/store"
import { useEffect } from "react"
import Modal from "../modal/modal"
import Newtask from "../modal/modals/newTask/newTask"
import OpenTask from "../modal/modals/openTask/openTask"
import DeleteModal from "../modal/modals/deleteModal/deleteModal"
import NewBoard from "../modal/modals/newBoard/newBoard"
import EditBoard from "../modal/modals/editBoard/editBoard"
import EditTask from "../modal/modals/editTask/editTask"


function App() {

const {boards, setCurrentBoard, currentTask, setCurrentTask, isNewTask, setIsNewTask, isDeleteTask, setIsDeleteTask, setisTaskOpened, isTaskOpened, deleteTask, isEditBoardModal, setIsEditBoardModal, isNewBoardModal, setIsNewBoardModal, isDeleteBoardModal, setIsDeleteBoardModal, deleteBoard, isEditTaskModal, setIsEditTaskModal} = useTasks()

const onDeleteTask = () => {
  deleteTask()
  setCurrentTask({
    taskID: '',
    taskName: '',
    description: '',
    subtasks: [],
  })
  setIsDeleteTask(false)
}

const onCancelTaskDeletion = () => {
  setisTaskOpened(true)
  setIsDeleteTask(false)
}


const onDeleteBoard = () => {
  deleteBoard()
  setIsDeleteBoardModal(false)
}

const onCancelBoardDeletion = () => {
  setIsEditBoardModal(true)
  setIsDeleteBoardModal(false)
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
    currentTask.taskName && isTaskOpened && <Modal onClose={() => setCurrentTask({
      taskID: '',
      taskName: '',
      description: '',
      subtasks: [],
    })}> <OpenTask/> </Modal> 
    }

    {
      isNewTask && <Modal onClose = {() => setIsNewTask(false)}> <Newtask/> </Modal>
    }

    {
      isDeleteTask && <Modal onClose = {() => setIsDeleteTask(false)}> <DeleteModal subject = {'task'} onDelete={onDeleteTask} onCancel = {onCancelTaskDeletion}/> </Modal>
    }

    {
      isNewBoardModal && <Modal onClose = {() => setIsNewBoardModal(false)}> <NewBoard/></Modal>
    }

    {
      isEditBoardModal && <Modal onClose = {() => setIsEditBoardModal(false)}> <EditBoard/></Modal>
    }

    {
      isDeleteBoardModal && <Modal onClose = {() => setIsEditBoardModal(false)}> <DeleteModal subject = {'board'} onDelete={onDeleteBoard} onCancel = {onCancelBoardDeletion}/></Modal>
    }

    {
      isEditTaskModal && <Modal onClose = {() => setIsEditTaskModal(false)}> <EditTask/> </Modal>
    }
    </>
  )
}

export default App
