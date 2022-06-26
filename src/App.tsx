import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Alert } from "./components/Alert/alert";
import './styles/index.scss'

function App() {
  return (
    < div className="App" >
      <header className="App-header">
        <Alert ></Alert>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </ div>
  );
}

export default App;
