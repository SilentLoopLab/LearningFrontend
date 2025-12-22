import "./App.css";
import { ToDoList } from "./components/ToDoList";
import { ToDoProvider } from "./context/todo-provider";

export default function App() {
    return (
        <div className="container">
            <ToDoProvider>
                <ToDoList />
            </ToDoProvider>
        </div>
    );
}

