import React from 'react';
import { useState } from 'react';

export default function Conter() {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount((current) => current + 1);
  };
  const addCountByThree = () => {
    setCount((current) => current + 3);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addCount}>+1</button>
      <button onClick={addCountByThree}>+3</button>
    </div>
  );
}
