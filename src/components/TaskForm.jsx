import { useState, useContext } from "react";
import {TaskContext} from '../context/TaskContext'

function TaskForm() {
    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");

    const {createTask} = useContext(TaskContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({ title: Title, description: Description });
        setTitle("")
        setDescription("")
    };

    return (
        <div className="max-w-md mx-auto ">
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
            <h1 className="text-white font-bold text-3xl p-4 text-center" >Tarea Nueva</h1>
                <input
                    className="p-4 bg-slate-400 w-full mb-2"
                    key="title"
                    placeholder="Escribe tu tarea"
                    onChange={(e) => setTitle(e.target.value)}
                    value={Title}
                />
                <textarea
                    className="p-4 bg-slate-400 w-full mb-2"
                    key="description"
                    placeholder="Describe tu tarea"
                    onChange={(e) => setDescription(e.target.value)}
                    value={Description}
                />
                <button 
                    className="bg-indigo-700 text-white px-3 py-1 rounded-md"
                >Guardar</button>
            </form>
        </div>
    );
}

export default TaskForm;
