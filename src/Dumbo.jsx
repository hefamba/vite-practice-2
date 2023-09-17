import React from 'react';
import { useState } from 'react';

function generateGameBoard() {
  console.log('making game right now');
  return Array(5000);
}

export default function Dumbo() {
  const [board, setBoard] = useState(generateGameBoard());
  return (
    <div>
      <button onClick={() => setBoard('anything')}>CHANGE STATE</button>
    </div>
  );
}
