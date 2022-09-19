import React from 'react'

function Task(props) {
    return (
        <div className='container'>
          <h6>{props.taskName}</h6>

          <button className='bt' onClick={() => deleteTask(props.id)}>X</button>

        </div>
      );
  
}

export default Task;