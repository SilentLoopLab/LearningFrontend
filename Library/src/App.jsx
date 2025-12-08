import { useState } from 'react';
import { Basket } from './components/Basket';
import { ProductList } from './components/ProductList';

export default function App() {
  const [products, setProducts] = useState([
    {
      id: 101,
      title: 'Psychology',
      price: 28,
      photo: 'https://images.booksense.com/images/568/458/9781465458568.jpg',
    },
    {
      id: 102,
      title: 'Math',
      price: 28,
      photo:
        'https://m.media-amazon.com/images/I/911G2nW1exL._AC_UF350,350_QL50_.jpg',
    },
    {
      id: 103,
      title: 'History',
      price: 32,
      photo:
        'https://m.media-amazon.com/images/I/81tndPuXhSL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      id: 104,
      title: 'Biology',
      price: 64,
      photo:
        'https://m.media-amazon.com/images/I/81+CjBVdm8L._UF350,350_QL50_.jpg',
    },
  ]);
  const [basket, setBaskets] = useState([]);
  const moveToBasket = (id) => {
    const exists = basket.some((item) => item.id === id);
    const elem = products.find((n) => n.id === id);
    exists
      ? increaseQuantity(id)
      : setBaskets([{ ...elem, quantity: 1 }, ...basket]);
  };
  const increaseQuantity = (id) => {
    setBaskets(
      basket.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };
  const decreaseQuantity = (id) => {
    setBaskets(
      basket.map((item) =>
        item.id === id && item.quantity !== 0
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };
  const deleteBasket = (id) =>
    setBaskets(basket.filter((item) => item.id !== id));

  return (
    <>
      <ProductList products={products} onMove={moveToBasket} />
      <Basket
        basket={basket}
        onIncrease={increaseQuantity}
        onDecrease={decreaseQuantity}
        onDelete={deleteBasket}
      />
    </>
  );
}
