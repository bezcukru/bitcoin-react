import React from 'react';
import './App.css';
import Crypto from './components/Crypto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Bitcoin - kurs wymiany:</h1>
      </header>
      <Crypto />
    </div>
  );
}

export default App;
