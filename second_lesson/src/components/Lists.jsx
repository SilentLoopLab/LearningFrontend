import { ToDoItem } from './ToDoItem';

export const Lists = ({ items, onDeleteItem, onComplete }) => {
  return (
    <div className="allList">
      <h3>Lists</h3>
      <div className="list-todos">
        {items.map((item) => (
          <ToDoItem
            key={item.id}
            id={item.id}
            text={item.text}
            complete={item.complete}
            onDeleteItem={onDeleteItem}
            onComplete={onComplete}
          />
        ))}
      </div>
    </div>
  );
};
