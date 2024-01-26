import {  useState } from "react"
import TodoBox from "./TodoBox";
import Inputs from './Inputs.jsx'

function Todocontent() {
  const [todos,setTodos] = useState([]);
  const [completedTodos,setCompletedTodos] = useState([]);
    return (
      <>
      <Inputs todos={todos} setTodos={setTodos}/>
      <div>
        <TodoBox todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos}/>
        </div>
      </>
    )
  }
  
  export default Todocontent