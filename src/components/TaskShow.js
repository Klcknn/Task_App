import { useState } from "react";
import TaskCreate from "./TaskCreate";
import { useContext } from 'react';
import TasksContext from '../context/task';
import { AiOutlineEdit } from "react-icons/ai";
import { AiTwotoneDelete } from "react-icons/ai";

function TaskShow( {task_value} ) {

    const { taskByIdDelete, editTaskByID } = useContext(TasksContext);
    const [showEdit, setshowEdit] = useState(false);
    //console.log(task_value);
    
    const handleDeleteClick = () => {
        //onDelete(task_value.id);
        taskByIdDelete(task_value.id);
    }

    const handleUpdateClick = () => {
        setshowEdit(!showEdit);
    }

    const handleSubmit = (id, updatedTitle, updatedTaskDesc) => { 
        setshowEdit(false);
        //onUpdate(id, updatedTitle, updatedTaskDesc);
        editTaskByID(id, updatedTitle, updatedTaskDesc);
    }

    return ( 
        <div className="task-show">
            {
                showEdit ? (
                 <TaskCreate task={task_value} taskformUpdate={true} onUpdate={handleSubmit} />
                //  <TaskCreate task={task_value} taskformUpdate={true} onUpdate={handleSubmit} />
                ) : (
                <div>
                    <div className="main-content">
                        <h3 className="task-title">Subject Heading</h3>
                        <p>{task_value.title}</p>
                        <h3 className="task-title">Subject Description</h3>
                        <p>{task_value.taskDesc}</p>
                    </div>
                    <div className="btn-all">
                        <button className="btn-delete" onClick={handleDeleteClick}>
                            <AiTwotoneDelete></AiTwotoneDelete>
                            <p>Delete</p>
                        </button>
                        <button className="btn-update" onClick={handleUpdateClick}>
                            <AiOutlineEdit></AiOutlineEdit>
                            <p>Edit</p> 
                        </button>
                    </div>
                </div> 
                )
            }
            
        </div> 
    );
}

export default TaskShow;