import React from 'react';

function Task(props) {
    return (
        <div
            className="task"
            style={{ backgroundColor: props.completed ? "green" : "white" }} >
            <div className='container'>
                <h6>{props.taskName}</h6>

                <button onClick={() => props.completedTask(props.id)}>complete</button>
                <button className='bt' onClick={() => props.deleteTask(props.id)}>X</button>

            </div>
        </div>
    );

}

export default Task;