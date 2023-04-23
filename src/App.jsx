import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
    return (
        <div className="container mx-auto p-8">
            <TaskForm />
            <TaskList />
        </div>
    );
}

export default App;
