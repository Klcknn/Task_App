import { useState } from "react";
import { useContext } from 'react';
import TasksContext from '../context/task';

function TaskCreate( { task, taskformUpdate, onUpdate } ) {
        
    const { taskCreate } = useContext(TasksContext);
    const [title, setTitle] = useState( task ? task.title : " " );
    const [taskDesc, setTaskDesc] = useState( task ? task.taskDesc : " " );
    
    const handleChange = (event) => {
        const new_value = event.target.value;
        setTitle(new_value); 
    };

    const handleTaskDescChange = (event) => { 
        const new_taskDesc = event.target.value;
        setTaskDesc(new_taskDesc);
    };

    const handleSubmit = (event) => {
        event.preventDefault();  // if we dont want to refresh the web page we will use code line; 
        if(taskformUpdate){
            onUpdate(task.id, title, taskDesc);
        }
        else{
            //onCreate(title, taskDesc);
            taskCreate(title, taskDesc);
        }

        setTitle("");
        setTaskDesc("");
        
    };
    //console.log("Input Value: " + title +  " Textarea value: " + taskDesc);   

    return ( 
        <div>
            {" "}
            { taskformUpdate ? (
                <div className="task-update">
                    <h3>You can update here...</h3>
                    <form className="task-form" action="" onSubmit={handleSubmit}>
                        <label className="task-label">Subject Heading</label>
                        <input value={title} onChange={handleChange} className="task-input" type="text" />
                        <label className="task-label">Subject Description</label>
                        <textarea value={taskDesc} onChange={handleTaskDescChange} className="task-input" rows={6} ></textarea>
                        <button className="task-btn update-btn">Edit</button>
                    </form>
                </div> 
                ) : ( 
                <div className="task-create">
                    <h3> Words fly away, writings remain , If you have a plan, you can add it. </h3>
                    <form className="task-form" action="" onSubmit={handleSubmit}>
                        <label className="task-label">Subject Heading</label>
                        <input value={title} onChange={handleChange} className="task-input" type="text" placeholder="Please enter the subject heading..." />
                        <label className="task-label">Subject Description</label>
                        <textarea value={taskDesc} onChange={handleTaskDescChange} className="task-input" rows={6} placeholder="Please enter the subject description..." ></textarea>
                        <button className="task-btn">Save</button>
                    </form>
                </div> ) 
            }
        </div>
    );
}

export default TaskCreate;