import { createContext } from "react";
import { useState } from 'react';
import axios from 'axios';

const TasksContext = createContext();

function ProviderFunction({ children }) {
    const [tasks, setTasks] = useState([]);
    const taskCreate = async (title, taskDesc) => {
      //debugger;
      const response = await axios.post("http://127.0.0.1:3001/task", { title, taskDesc });
      const createdTasks = [...tasks, response.data];
      /* 
      const createdTasks = [...tasks, {
        id: Math.round(Math.random() * 999999),
        title,
        taskDesc
      }]; 
      */
      setTasks(createdTasks);
  
      // ( ... ) Bu üç nokta ne yapıyor ? yeni bir array için eşkileri alıp yeni olan array içine kopyalıyor.
      //console.log(title, taskDesc);
    };

    const fetchTask = async () => { 
        const response = await axios.get("http://127.0.0.1:3001/task");
        //debugger;
        setTasks(response.data);
    };

    const taskByIdDelete = async (id) => {
        await axios.delete(`http://127.0.0.1:3001/task/${id}`);    
        const afterDeletingTask = tasks.filter( (task) => task.id !== id );
        setTasks(afterDeletingTask);
        
        /* 
        const afterDeletingTask = tasks.filter((task) => {
          return task.id !== id;
        }); 
        */
        //console.log(id);
        
    };
    
    const editTaskByID = async (id, updatedTitle, updatedTaskDesc) => {
        await axios.put(`http://127.0.0.1:3001/task/${id}`, {
          title: updatedTitle,
          taskDesc: updatedTaskDesc
        });     
        const updatedTask = tasks.map((task) => {
          if ( task.id === id ) 
          { 
            return {id, title: updatedTitle, taskDesc: updatedTaskDesc}
          }
          else
          {
            return tasks;
          }
        });
        setTasks(updatedTask);
    }

    const sharedValuesandMethods = { 
        tasks,
        taskCreate,
        fetchTask,
        taskByIdDelete,
        editTaskByID,
    } 

    
    return ( 
            <TasksContext.Provider value={sharedValuesandMethods}>
                {children}
            </TasksContext.Provider> 
    );
}

export { ProviderFunction };

export default TasksContext;