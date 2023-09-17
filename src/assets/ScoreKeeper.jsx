import React from 'react';
import { useState } from 'react';

export default function ScoreKeeper() {
  const [scores, setScores] = useState({ player1: 0, player2: 0 });
  const player1Add = () => {
    setScores((prev) => {
      return { ...prev, player1: scores.player1 + 1 };
    });
  };
  const player2Add = () => {
    setScores((prev) => {
      return { ...prev, player2: scores.player2 + 1 };
    });
  };
  return (
    <div>
      <p>Playler 1: {scores.player1}</p>
      <p>Playler 2: {scores.player2}</p>
      <button onClick={player1Add}>+1 player 1</button>
      <button onClick={player2Add}>+1 player 2</button>
    </div>
  );
}
