import React from 'react';
import { useState } from 'react';

function App() {
const [todoList,setTodoList]=useState([]);

const [task,setTask]=useState('');
setTask(task);



  return (
    <div>
    <div>Daily List of Work</div>
    <input></input>
    <button onClick={task}>Add task</button>
    </div>
  );
}

export default App; 