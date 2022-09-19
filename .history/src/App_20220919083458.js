import React from 'react';
import { useState } from 'react';

function App() {
const [todoList,setTodoList]=useState([]);
setTodoList(...todoList)

const [task,setTask]=useState('');
setTask(todoList);



  return (
    <div>
    <div>Daily List of Work</div>
    <input></input>
    <button onClick={{setTask}}>Add task</button>
    </div>
  );
}

export default App; 