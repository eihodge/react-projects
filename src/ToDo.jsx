import React, { useState } from 'react'

function ToDo() {
    
    const [tasks, setTasks] = useState(["Food", "Poopasdfsdfasdfsd"]); // List of tasks
    
    const [newTask, setNewTask] = useState(""); // Task being edited with text box

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(prevTasks => [...prevTasks, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks)
    }

    function moveTaskUp(index) {
        if(index > 0) { // Check if already at top of list or not
            const updatedTasks = [...tasks]; // Copy tasks into updatedTasks
            [updatedTasks[index], updatedTasks[index-1]] 
            = [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if(index < tasks.length - 1) { // Check if already at top of list or not
            const updatedTasks = [...tasks]; // Copy tasks into updatedTasks
            [updatedTasks[index], updatedTasks[index+1]] 
            = [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(<>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&amp;display=swap" rel="stylesheet"></link>
        
        <div className="return-link-div">
            <a className="return-link" href="https://eihodge.github.io/PersonalWebsite/webapps_index.html">&lt; Return to Projects</a>
        </div>

        <div className="to-do-list">
            <h1>To-Do List</h1>

            <div>
                <input 
                    type="text"
                    placeholder="Enter a task"
                    value={newTask}
                    onChange={handleInputChange}
                    />
                <button
                className="add-button"
                onClick={addTask}
                >Add</button>
            </div>

            
            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span class = "text">{task} </span>
                        <button 
                            className="delete-button"
                            onClick={() => deleteTask(index)}
                        >Delete</button>
                        <button
                            className="move-button"
                            onClick={() => moveTaskUp(index)}
                        >☝️</button>
                        <button 
                            className="move-button"
                            onClick={() => moveTaskDown(index)}
                        >👇</button>
                    </li>
                )}
            </ol>

            
        </div>
    </>);
  }
  export default ToDo;