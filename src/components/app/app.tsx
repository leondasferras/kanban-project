import "./app.module.css"
import Button from "../../ui/Button/button"
import Checkbox from "../../ui/Checkbox/checkbox"
import Input from "../../ui/Input/input"
import Dropdown from "../../ui/Dropdown/dropdown"


function App() {

  return (
    <>
     <h1 className ='heading_XL'> dfsdafdafdsfdssd</h1>
     <Button mode="secondary">btn</Button>
     <Checkbox/>
     <Input/>
     <Dropdown options ={['nice', 'good', 'awesome', '4', '5', '6']}/>
    </>
  )
}

export default App
