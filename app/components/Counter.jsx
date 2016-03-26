import React from 'react';

export default ({ counter, onIncrement, onDecrement }) => (
  <div>
    <h1>{counter}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
);
