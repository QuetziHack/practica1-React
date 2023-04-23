import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TaskContextProvider } from "./context/TaskContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <TaskContextProvider>
            <main className="bg-zinc-800 h-screen ">
                <App />
            </main>
        </TaskContextProvider>
    </React.StrictMode>
);
