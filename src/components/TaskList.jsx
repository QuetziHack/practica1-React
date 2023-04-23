import {useContext} from 'react'
import TaskCard from './TaskCard' 
import {TaskContext} from '../context/TaskContext'

function TaskList() {

    const {task} = useContext(TaskContext)

    if (!task.length) return <h1 className="text-white font-bold text-4xl p-4 text-center" >No hay tareas aún n.n</h1>;

    return (
        <div className='grid grid-cols-4 gap-2'>   
            {task.map((tarea) => (
              <TaskCard  key = {tarea.id} task={tarea}/>  
            ))}
        </div>
    );
}

export default TaskList;
