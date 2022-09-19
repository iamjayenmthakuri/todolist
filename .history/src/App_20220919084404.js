import React from 'react';
import { useState } from 'react';

function App() {
const [todoList,setTodoList] = useState([]);

const [newTask,setNewTask] = useState("");
const handleOnChange=(event)=>{
  setNewTask(event.target.value)
  

}




  return (
    <div>
    <div>Daily List of Work</div>
    <input onChange={handleOnChange}></input>
    <button onClick={{setTask}}>Add task</button>
    </div>
  );
}

export default App; 