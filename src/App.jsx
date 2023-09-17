import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Counter from './Counter';
import Dumbo from './Dumbo';
import ScoreKeeper from './assets/ScoreKeeper';

import './App.css';

function App() {
  return (
    <>
      <Dumbo />
      <ScoreKeeper />
    </>
  );
}

export default App;
