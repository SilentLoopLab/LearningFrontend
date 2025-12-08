export const BasketItem = ({ basket, onIncrease, onDecrease, onDelete }) => {
  return (
    <>
      <td>{basket.title}</td>
      <td>${basket.price}</td>
      <td>{basket.quantity}</td>
      <td>${basket.price * basket.quantity}</td>
      <td>
        <button onClick={() => onIncrease(basket.id)}>+</button>
        <button onClick={() => onDecrease(basket.id)}>-</button>
        <button onClick={() => onDelete(basket.id)}>x</button>
      </td>
    </>
  );
};
