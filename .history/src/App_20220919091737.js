import React from 'react';
import { useState } from 'react';

function App() {
const [todoList,setTodoList] = useState([]);
const [newTask,setNewTask] = useState("");

const handleOnChange=(event)=>{
  setNewTask(event.target.value)
};

const addTask = () => {
  const task ={
  id: todoList.lenght === 0 ? 1 : [todoList.length-1].id+1,
  taskName:newTask,
}
  setTodoList([...todoList,newTask]);
}

const deleteTask = () => {



}




  return (
    <div>
    <div>Daily List of Work</div>
   
    <input onChange={handleOnChange} />
    <button onClick={addTask}>Add task</button>
    {todoList.map((task,)=>{
      return(
        <>
         <h1>{task.taskName}</h1>
      <h5><button onClick={task.id}>x</button></h5>
      </>
    )})}
    
    </div>
  );
}

export default App; 