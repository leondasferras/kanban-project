import "./app.module.css"

import Header from'../header/header'
import Sidebar from "../sidebar/sidebar"
import Main  from "../main/main"
import Modal from "../modal/modal"
import OpenTask from "../modal/modals/openTask/openTask"
import Newtask from "../modal/modals/newTask/newTask"



function App() {

  return (
    <>
     <Header/>
     <Main>
       <Sidebar/>
       <Modal>
        <Newtask/>
       </Modal>
     </Main>


    </>
  )
}

export default App
