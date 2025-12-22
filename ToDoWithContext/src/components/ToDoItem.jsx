import { useContext } from "react";
import { ToDoContext } from "../context/todo-context";

export const ToDoItem = ({ todo }) => {
    const { onChangeState, onDelete } = useContext(ToDoContext);
    return (
        <>
            <div className="toDoItem">
                <p>{todo.text}</p>
                <button onClick={() => onChangeState(todo.id)}>
                    {todo.completed ? "cancel" : "Complete"}
                </button>
                <button onClick={() => onDelete(todo.id)}>Delete</button>
            </div>
        </>
    );
};
