import React from "react";
import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [data, setData] = useState();

  React.useEffect(() => {
    fetch("/id/floods")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  
  console.log("This is line 14 App.js", {data} )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
