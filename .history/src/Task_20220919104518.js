import React from 'react'

function Task() {
 >
    return (
        <div className='container'>
          <h6>{task.taskName}</h6>

          <button className='bt' onClick={() => deleteTask(task.id)}>X</button>

        </div>
      );
  
}

export default Task;