import React from 'react';
import { useState } from 'react';
import "./App.css";
import Task from './Task';


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
      completed:false,
    }
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };
  const completedTask = (id) =>{
    setTodoList(
    todoList.map((task) = () => {
      if (task.id === id ) {
        return{ ...task, completed : true };
      }
      else{
        return task;
      }) 
      );

    }

  
   
  return (
    <div>
      <div><h1 className='title'>Daily List of Work</h1>

        <input className='input' onChange={handleOnChange} />
        <button className='button' onClick={addTask}>Add Task</button>
        {todoList.map((task) => {
          return(
            <Task completedTask={completedTask} deleteTask={deleteTask} taskName={task.taskName} id={task.id}/>
         )
        
        })}
      </div>
    </div>
  );
}

export default App; 