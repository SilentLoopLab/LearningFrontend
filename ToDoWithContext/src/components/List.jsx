import { useContext } from "react";
import { ToDoItem } from "./ToDoItem";
import { ToDoContext } from "../context/todo-context";

export const List = () => {
    const { filtredTodos } = useContext(ToDoContext);

    return (
        <>
            <div className="ListToDos">
                {filtredTodos.map((todo) => (
                    <ToDoItem key={todo.id} todo={todo} />
                ))}
            </div>
        </>
    );
};
