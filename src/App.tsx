import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Pokemon } from './features/pokemon/Pokemon';
import './App.css';

function App() {
  return (
    <div className="App"> 
      <Pokemon />
    </div>
  );
}

export default App;
