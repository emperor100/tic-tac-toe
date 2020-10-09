import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './Components/Board/Board'

function App() {
  return (
    <div>
      <div>
        <p>
          First Board
        </p>
      </div>
      <div>
        <Board />
      </div>
      <div>
        <p>
          Second Board
        </p>
      </div>
      <div>
        <Board />
      </div>
      <div>
        <p>
          Third Board
        </p>
      </div>
      <div>
        <Board />
      </div>
    </div>
  );
}

export default App;
