import {  useState } from "react"

function Inputs({todos,setTodos}) {
const [todoTitle,setTodoTitle] = useState('')
const [todoText,setTodoText] = useState('')
 
  const handleTodoTitle = function(title) {
    setTodoTitle(title.target.value)
  }
  const handleTodoText = function(text) {
    setTodoText(text.target.value)
  }
  const handleTodoBtn = function () { if
    (!todoTitle.trim() || !todoText.trim()) {
      alert("제목과 내용을 모두 입력하세요!");
      return;}else{
    const newTodos = {title:todoTitle, text:todoText}
    setTodos([...todos,newTodos])
    setTodoTitle('')
    setTodoText('')
  }}
    
  return (
      <>
      제목:<input value={todoTitle} onChange={handleTodoTitle} ></input> 
      내용:<input value={todoText} onChange={handleTodoText}></input>
      <button onClick={handleTodoBtn}>입력</button>

      </>
    )
  }
  
  export default Inputs