import React from "react";
// import logo from "./logo.svg";
import MediaCard from "./components/MediaCard";
import Gate from "./components/Gate";

import "./App.css";

function App({ name }) {
  return (
    <React.Fragment>
      <div className="myContainer">
        <div>
          <h2>Hello World!</h2>
          <h2>Hello from {name}</h2>
          <p>
            <strong>{name}</strong>
          </p>
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
      <MediaCard
        title="Media Card"
        body="Lorem ipsum dolor sit amet."
        img_Url="https://i.pinimg.com/originals/cc/18/8c/cc188c604e58cffd36e1d183c7198d21.jpg"
      ></MediaCard>
      <Gate isOpen={true}></Gate>
    </React.Fragment>
  );
}

export default App;
