// Write a program to build React app for task todo list.
// •	Add 1 input field and button and by clicking on button display entered task on
// the same page.
// •	Also, add delete button with each added task to delete the task

import React,{useState} from 'react' 
 
function PB_419() { 
    const[Task, setTask]= useState(""); 
    const[Todolist, setTodoList]=useState([]); 
    function handleChange(event) { 
        setTask(event.target.value); 
    } 
    function addTask(event) { 
        setTodoList([...Todolist,Task]); 
    }; 
    function deleteTask(taskName){           
        setTodoList( 
            Todolist.filter((task)=>{ 
                if (task!==taskName){ 
                    return true;
                }
                else{ 
                    return false; 
                } 
            }) 
        ) 
    }                                     
    return ( 
        <div> 
            <h1> Enter Task </h1> 
            <input  onChange={handleChange}/>    
            <button  onClick={addTask}> Add Task </button>
            {
                Todolist.map((task)=>{ 
                return( 
                    <div> 
                        <h1> {task}</h1> 
                        <button onClick={() => deleteTask(task)}>Delete</button> 
                    </div> 
                    ); 
                })
            } 
        </div> 
    ); 
} 
export default PB_419

