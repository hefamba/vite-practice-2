import React from 'react';
import { useState } from 'react';

export default function ScoreKeeper({ numPlayer = 3, target = 5 }) {
  const [scores, setScores] = useState(new Array(numPlayer).fill(0));
  const incrementScore = (idx) => {
    // setScores((prev) => {
    //   const copy = [...prev];
    //   copy[idx] += 1;
    //   return copy;
    // });

    setScores((prev) => {
      return prev.map((score, i) => {
        if (i === idx) return score + 1;
        return score;
      });
    });
  };

  return (
    <div>
      <h1>Score Keeper </h1>

      <ul>
        {scores.map((score, idx) => (
          <li key={idx}>
            {`Player${idx + 1}: ${score}`}
            <button onClick={() => incrementScore(idx)}>+1</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
