import { useEffect, useState } from "react";
import { ToDoContext } from "./todo-context";
import axios from "axios";

export const ToDoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");
    const filtredTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
    });

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/todos`);
                setTodos(response.data);
            } catch (err) {
                console.error("Failed to load todos", err);
            }
        };

        fetchTodos();
    }, []);

    const changeFiltres = (str) => {
        setFilter(str);
    };

    const addToDo = async (str) => {
        const newToDo = { text: str, completed: false };
        try {
            const response = await axios.post(
                `http://localhost:3000/todos`,
                newToDo
            );
            setTodos((prev) => [...prev, response.data]);
        } catch (err) {
            console.error("Failed to add todo", err);
        }
    };

    const changeToComplete = async (id) => {
        const currentTodo = todos.find((todo) => todo.id === id);
        if (!currentTodo) return;

        const updatedTodo = {
            ...currentTodo,
            completed: !currentTodo.completed,
        };

        setTodos((prev) =>
            prev.map((todo) => (todo.id === id ? updatedTodo : todo))
        );

        try {
            await axios.patch(`http://localhost:3000/todos/${id}`, {
                completed: updatedTodo.completed,
            });
        } catch (err) {
            console.error("Failed to toggle todo", err);
            setTodos((prev) =>
                prev.map((todo) => (todo.id === id ? currentTodo : todo))
            );
        }
    };

    const deleteItem = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/todos/${id}`);
            setTodos((prev) => prev.filter((todo) => todo.id !== id));
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <ToDoContext.Provider
            value={{
                filtredTodos,
                filter,
                onChangeFilter: changeFiltres,
                onAddToDo: addToDo,
                onChangeState: changeToComplete,
                onDelete: deleteItem,
            }}
        >
            {children}
        </ToDoContext.Provider>
    );
};
