import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Deno Land Indonesia</p>
        <a
          className="App-link"
          href="https://deno.land/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Deno
        </a>
      </header>
    </div>
  );
}

export default App;
