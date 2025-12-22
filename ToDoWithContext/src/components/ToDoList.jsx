import { AddToDo } from "./AddToDo";
import { List } from "./List";
import { ToDoFilter } from "./ToDoFilter";

export const ToDoList = () => {
    return (
        <>
            <h3>ToDoList</h3>
            <AddToDo />
            <ToDoFilter />
            <List />
        </>
    );
};
