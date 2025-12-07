import { useState } from 'react';

export const AddToDo = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!text.trim()) {
      return setError('Please fill all the fields!!!!!');
    }

    setError('');
    onAdd(text);
    setText('');
  };

  return (
    <div className="add-to-do">
      AddToDo
      {error && <p style={{ color: 'white' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter todo..."
        />
      </form>
    </div>
  );
};
