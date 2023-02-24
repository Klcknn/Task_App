import TaskShow from "./TaskShow";
import { useContext } from 'react';
import TasksContext from '../context/task';

function TaskList() {
    const {tasks} = useContext(TasksContext);
    return ( 
        <div className="task-list">
            {
                tasks.map((task, index) => {
                    return (
                        <TaskShow key={index} task_value={task} />
                        // <TaskShow key={index} task_value={task} onDelete={onDelete} onUpdate={onUpdate} />
                    );
                }) 
            }
        </div> 
    );
}

export default TaskList;