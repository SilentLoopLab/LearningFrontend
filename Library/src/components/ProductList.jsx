import { ProductItem } from './ProductItem';
import './components.css';

export const ProductList = ({ products, onMove }) => {

  return (
    <>
      <div className="list">
        {products.map((product) => (
          <ProductItem
            product={product}
            onMove={ onMove }
            key={product.id}
          />
        ))}
      </div>
    </>
  );
};
