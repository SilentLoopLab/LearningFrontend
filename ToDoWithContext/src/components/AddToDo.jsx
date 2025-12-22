import { useContext, useState } from "react";
import { ToDoContext } from "../context/todo-context";

export const AddToDo = () => {
    const [text, setText] = useState("");
    const [error, setError] = useState("");
    const { onAddToDo } = useContext(ToDoContext);
    const handleSubmit = (event) => {
        event.preventDefault();

        if (!text.trim()) {
            return setError("Please fill all the fields!!!!!");
        }

        setError("");
        onAddToDo(text);
        setText("");
    };

    return (
        <div className="add-to-do">
            AddToDo
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter todo..."
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};
