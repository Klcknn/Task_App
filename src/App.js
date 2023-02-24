import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import { useEffect, useContext } from 'react';
import TasksContext from '../src/context/task';
import { BiBookmarkAltPlus } from "react-icons/bi";


function App() {

  const { fetchTask } = useContext(TasksContext);
  useEffect(() => {  
    fetchTask();
  }, []);
    
  return (
      <div className="App">
        <div className='index'>
          <TaskCreate />
          {/* <TaskCreate onCreate={taskCreate}/> */}
          <div className='gorev-part'>
            <BiBookmarkAltPlus className='icon'></BiBookmarkAltPlus>
            <h1 className='gorev'>My Notes</h1>
          </div>
          <TaskList />
          { /*<TaskList tasks={tasks} onDelete={taskByIdDelete} onUpdate={editTaskByID} />*/ }
        </div>
        <div className='snow'>

        </div>
      </div>
      
  );
}

export default App;
