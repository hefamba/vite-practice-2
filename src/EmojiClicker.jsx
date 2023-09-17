import React from 'react';
import { useState } from 'react';

export default function EmojiClicker() {
  const [emojis, setEmojis] = useState(['😭']);
  function addEmoji() {
    setEmojis((prev) => [...prev, '🍻']);
  }
  return (
    <div>
      {emojis.map((e) => (
        <h2>{e}</h2>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
    </div>
  );
}
