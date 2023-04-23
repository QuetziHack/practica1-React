import { createContext, useState, useEffect } from "react";
import { tareas } from "../data/task";


export const TaskContext = createContext();

export function TaskContextProvider(props) {
    const [task, setTask] = useState(tareas);
    const createTask = (newTask) => {
        setTask([
            ...task,
            {
                id: task.length,
                title: newTask.title,
                description: newTask.description,
            },
        ]);
    };

    const deleteTask = (id) => {
        setTask([...task.filter((n) => n.id !== id)]);
    };

    useEffect(() => {
        setTask(tareas);
    }, []);

    return (
        <TaskContext.Provider value={{
            task,
            deleteTask,
            createTask
        }}>{props.children}</TaskContext.Provider>
    );
}
