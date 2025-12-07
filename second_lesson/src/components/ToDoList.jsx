import { useState } from 'react';
import { AddToDo } from './AddToDo';
import { Lists } from './Lists';

export const ToDoList = () => {
  const [items, setItems] = useState([
    { id: 101, text: 'go to the GYM', complete: true },
    { id: 102, text: 'read Books', complete: true },
    { id: 103, text: 'eat burger', complete: false },
  ]);

  const AddItem = (newToDo) => {
    const exists = items.some((item) => item.text === newToDo);
    if (exists) return;

    const newId = items.length > 0 ? items[items.length - 1].id + 1 : 101;

    setItems((items) => [
      ...items,
      {
        id: newId,
        text: newToDo,
        complete: false,
      },
    ]);
  };
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleComplete = (id) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? {
              id: item.id,
              text: item.text,
              complete: !item.complete,
            }
          : item,
      ),
    );
  };
  return (
    <>
      <header className="toDoList">ToDoList</header>
      <AddToDo onAdd={AddItem} />
      <Lists
        items={items}
        onDeleteItem={deleteItem}
        onComplete={handleComplete}
      />
    </>
  );
};
