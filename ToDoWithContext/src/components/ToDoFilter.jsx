import { useContext } from "react";
import { ToDoContext } from "../context/todo-context";

export const ToDoFilter = () => {
    const { filter, onChangeFilter } = useContext(ToDoContext);

    return (
        <div className="filters">
            <button
                className={filter === "all" ? "active" : ""}
                onClick={() => onChangeFilter("all")}
            >
                All
            </button>

            <button
                className={filter === "active" ? "active" : ""}
                onClick={() => onChangeFilter("active")}
            >
                Active
            </button>

            <button
                className={filter === "completed" ? "active" : ""}
                onClick={() => onChangeFilter("completed")}
            >
                Completed
            </button>
        </div>
    );
};
