import "./app.module.css"

import Header from'../header/header'
import Sidebar from "../sidebar/sidebar"
import Main  from "../main/main"
import Modal from "../modal/modal"
import OpenTask from "../modal/modals/openTask/openTask"
import Newtask from "../modal/modals/newTask/newTask"
import NewBoard from "../modal/modals/newBoard/newBoard"
import DeleteModal from "../modal/modals/deleteModal/deleteModal"


function App() {

  return (
    <>
     <Header/>
     <Main>
       <Sidebar/>
       <Modal>
        <DeleteModal/>
       </Modal>
     </Main>


    </>
  )
}

export default App
