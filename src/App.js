import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App({ name }) {
  return (
    <div className="myContainer">
      <div>
        <h2>Hello World!</h2>
        <h2>Hello from {name}</h2>
        <h2>
          <strong>{name}</strong>
        </h2>
      </div>
      <div>
        <h3>Some Fruits:</h3>
        <ul>
          <li>Orange.</li>
          <li>Banana.</li>
          <li>Mango.</li>
        </ul>
      </div>
      <div>
        <h2>Here is the Js expression: {10 + 5}</h2>
      </div>
    </div>
  );
}

export default App;
