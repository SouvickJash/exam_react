import { useState } from "react"
import Button from "./component/propsPassing/Button"
import MainCard from "./component/propsPassing/MainCard"
import Parent from "./component/stateLifting/Parent"
import './App.css'
import FormSubmit from "./component/formValidation/FormSubmit"
import Toggle from "./component/toggle/Toggle"
import ParentMain from "./component/propsPassing2/ParentMain"
import ApiFetching from "./component/apiFetching/ApiFetching"

function App() {
  // const[count,setCount]=useState(0);
  
  // const handleClick=()=>{
  //   setCount(count+1)
  // }


  return (
    <>
       {/* <Parent/>    */} {/* lifting state up*/}
       {/* <MainCard/>   */} {/* props passing*/}

       {/* <Button handleClick={handleClick} text="click me">
       <h1> {count}</h1>
       </Button> */}

       {/* <FormSubmit/> */}
       {/* <Toggle/> */}
       
       {/* passign props */}
       {/* <ParentMain/> */}
       <ApiFetching/>
       
    </>
  )
}

export default App
