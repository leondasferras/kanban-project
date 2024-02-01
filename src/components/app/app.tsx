import "./app.module.css"

import Header from'../header/header'
import Sidebar from "../sidebar/sidebar"



function App() {

  return (
    <>
     <Header/>
     <main className="main">
      <Sidebar/>
     </main>

    </>
  )
}

export default App
