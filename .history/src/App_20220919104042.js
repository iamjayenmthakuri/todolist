import React from 'react';
import { useState } from 'react';
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleOnChange = (event) => {
    setNewTask(event.target.value)
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    }
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };
  return (
    <div>
      <div><h1 className='title'>Daily List of Work</h1>

      <input  className='input' onChange={handleOnChange} />
      <button className='button' onClick={addTask}>Add Task</button>
      {todoList.map((task) => {
        return (
          <div className='container'>
            <h6>{task.taskName}</h6>

            <button className='bt' onClick={() => deleteTask(task.id)}>X</button>
            
            </div>
        );
      })}
    </div>
    </div>
  );
}

export default App; 