import React from 'react';
import { useState } from 'react';

function App() {
const [todoList,setTodoList] = useState([]);
const [newTask,setNewTask] = useState("");

const handleOnChange=(event)=>{
  setNewTask(event.target.value)
};

const addTask = () =>{
  setTodoList([...todoList,newTask]);
}




  return (
    <div>
    <div>Daily List of Work</div>
   
    <input onChange={handleOnChange} />
    <button onClick={addTask}>Add task</button>
    {todoList.map((task)=>{
      return(
        <>
         <h1>{task}</h1>
      <h5><button>x</button></h5>
      </>
    )})}
    
    </div>
  );
}

export default App; 