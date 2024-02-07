import "./app.module.css"

import Header from'../header/header'
import Sidebar from "../sidebar/sidebar"
import Main  from "../main/main"
import Modal from "../modal/modal"



function App() {

  return (
    <>
     <Header/>
     <Main>
       <Sidebar/>
       <Modal>
        2312
       </Modal>
     </Main>


    </>
  )
}

export default App
