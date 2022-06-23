import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Button } from "./components/Button/button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button size='lg' btnType='link' href='http://www.baidu.com'>打下</Button>
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
    </div>
  );
}

export default App;
