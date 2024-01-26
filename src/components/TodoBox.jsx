import React from "react"

function TodoBox({todos,setTodos,completedTodos,setCompletedTodos}) {
  const deleteBtn = function(index) {
   const delTodo = todos.filter((_,todoIndex) => todoIndex !== index);
   setTodos(delTodo);
  };
  const deleteCompletedBtn = function(index) {
    const delCompletedTodo = completedTodos.filter(function (_,completedTodos) {
      return completedTodos !== index});
    setCompletedTodos(delCompletedTodo);
   };
   
 
  const completeBtn = function(index) {
    const newCompletedTodos = [...completedTodos,todos[index]]
    setCompletedTodos(newCompletedTodos);
    deleteBtn(index);
  }
  const cancelBtn = function(index) {
    const newCancleTodos = [...todos,completedTodos[index]]
    setTodos(newCancleTodos);
    deleteCompletedBtn(index);
  }

  const workingTodoBox = todos.map(function(todo,index){
    return(<div key={index} >
    <div><strong>{todo.title}</strong></div>
    <span>{todo.text}</span>
    <button onClick={function() {deleteBtn(index)}}>삭제</button>
    <button onClick={function() {completeBtn(index)}}>완료</button>
    </div>
    )
  })
  
  const doneTodoBox = completedTodos.map(function(completedTodos,index){
    return(<div key={index} >
    <div><strong>{completedTodos.title}</strong></div>
    <span>{completedTodos.text}</span>
    <button onClick={function() {deleteCompletedBtn(index)}}>삭제</button>
    <button onClick={function() {cancelBtn(index)}}>취소</button>
    </div>
    )
  })
    return (
      <>
      <div>
        <h5>working🏋️</h5>
      </div>
      <div>
      {workingTodoBox}
      </div>
      <div>
        <h5>Done!!!🏆</h5>
      </div>
      <div>
        {doneTodoBox}
      </div>
      </>
    )
  }
  
  export default TodoBox