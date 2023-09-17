import React from 'react';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function EmojiClicker() {
  const [emojis, setEmojis] = useState([{ id: uuid(), emoji: '😭' }]);
  function addEmoji() {
    setEmojis((prev) => [...prev, { id: uuid(), emoji: '🍻' }]);
  }
  function deleteEmoji(id) {
    setEmojis((prev) => {
      return prev.filter((e) => e.id !== id);
    });
  }
  return (
    <div>
      {emojis.map((e) => (
        <h2 onClick={() => deleteEmoji(e.id)} key={e.id}>
          {e.emoji}
        </h2>
      ))}
      <button onClick={addEmoji}>Add Emoji</button>
    </div>
  );
}
