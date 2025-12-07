import './components.css';

export const ToDoItem = ({ id, text, complete, onDeleteItem, onComplete }) => {
  return (
    <div className="toDoElement">
      <div>
        {text}
        <button type="button" onClick={() => onDeleteItem(id)}>
          Delete
        </button>
        <button type="button" onClick={() => onComplete(id)}>
          {complete ? 'Cancel' : 'Complete'}
        </button>
      </div>
    </div>
  );
};
