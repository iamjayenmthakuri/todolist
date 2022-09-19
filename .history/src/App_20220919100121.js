import React from 'react';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleOnChange = (event) => {
    setNewTask(event.target.value)
  };

  const addTask = () => {
    const task = {
      id : todoList.lenght === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
    }
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };
  return (
    <div>
      <div><h1>Daily List of Work</h1></div>

      <input onChange={handleOnChange} />
      <button onClick={addTask}>Add Task</button>
      {todoList.map((task) => {
        return (
          <div>
            <h1>{task.taskName}</h1>
            <button onClick={() => deleteTask(task.id)}>X</button>
          </div>
        );
      })}
    </div>
  );
}

export default App; 