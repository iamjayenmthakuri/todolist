import React from 'react';
import { useState } from 'react';

function App() {
const [todoList,setTodoList]=useState([]);

  return (
    <div>
    <div>Daily List of Work</div>
    <input></input>
    <button>Add task</button>
    </div>
  );
}

export default App; 