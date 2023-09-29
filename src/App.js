import {useState, useEffect } from "react";
import './App.css';
import Header from './components/Header.js';
import Display from './components/Display.js';
import Drumkit from './components/Drumkit.js';

function App() {
console.log("Hello");
  const DATA = [
    {
    className: "drum-pad high-hat-closed",
    id: "Closed-HH",
    keyCode: "81",
    keyTrigger: "Q",
    src: ""

    },
    {
    className: "drum-pad high-hat-open",
    id: "Open-HH",
    keyCode: "87",
    keyTrigger: "W",
    src: ""

    },
    {
    className: "drum-pad crash",
    id: "Crash",
    keyCode: "69",
    keyTrigger: "E",
    src: ""
    }
  ];

  const [drums, setDrums] = useState(DATA);
  const [displayValue, setDisplayValue] = useState("Display Default Valuuuuu");

  function onKeyDown(event) {
    console.log(event.key);
    console.log(event.code);
    console.log("Hello again");

  };

  useEffect(() => {
    console.log("Hello, hello");

    document.addEventListener("keydown", onKeyDown);
    } 
  )

  return (
    <div id="drum-machine" className="drum-machine">
      <Header></Header>

      <div className="main-container">

        <div className="drumkit-container">
          <Drumkit drums={drums}></Drumkit>
        </div>

        <div className="display-container">
          <Display displayValue={displayValue}></Display>
        </div>

      </div>
      
    </div>
  );
}

export default App;