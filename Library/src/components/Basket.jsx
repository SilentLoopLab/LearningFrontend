import { useState } from 'react';
import { BasketItem } from './BasketItem';
export const Basket = ({ basket, onIncrease, onDecrease, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>product</th>
          <th>price</th>
          <th>quantity</th>
          <th>subtotal</th>
          <th>actions</th>
        </tr>
      </thead>
      <tbody>
        {basket.map((item) => (
          <tr>
            <BasketItem
              key={item.id}
              basket={item}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
              onDelete={onDelete}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
