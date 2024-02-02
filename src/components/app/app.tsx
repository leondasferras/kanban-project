import "./app.module.css"

import Header from'../header/header'
import Sidebar from "../sidebar/sidebar"
import Main  from "../main/main"



function App() {

  return (
    <>
     <Header/>
     <Main>
       <Sidebar/>
     </Main>


    </>
  )
}

export default App
