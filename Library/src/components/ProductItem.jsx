export const ProductItem = ({ product, onMove }) => {
  return (
    <div>
      <img src={product.photo} alt={product.title} />
      <p>{product.title}</p>
      <strong>{product.price} USD</strong>
      <button onClick={() => onMove(product.id)}>Move</button>
    </div>
  );
};
