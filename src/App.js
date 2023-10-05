import {useState, useEffect } from "react";
import './App.css';
import Header from './components/Header.js';
import Display from './components/Display.js';
import Drumkit from './components/Drumkit.js';

function App() {
  const DATA = [
{
    className: "drum-pad",
    id: "Heater-1",
    keyCode: "81",
    keyTrigger: "Q",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"

    },
{
    className: "drum-pad",
    id: "Heater-2",
    keyCode: "87",
    keyTrigger: "W",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"

    },
{
    className: "drum-pad",
    id: "Heater-3",
    keyCode: "69",
    keyTrigger: "E",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"

    },
{
    className: "drum-pad",
    id: "Heater-4",
    keyCode: "65",
    keyTrigger: "A",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"

    },
{
    className: "drum-pad",
    id: "Heater-6",
    keyCode: "83",
    keyTrigger: "S",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"

    },
{
    className: "drum-pad",
    id: "Dsc_Oh",
    keyCode: "68",
    keyTrigger: "D",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"

    },
{
    className: "drum-pad",
    id: "Kick_n_Hat",
    keyCode: "90",
    keyTrigger: "Z",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"

    },
    {
    className: "drum-pad",
    id: "RP4_Kick_1",
    keyCode: "88",
    keyTrigger: "X",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"

    },
    {
    className: "drum-pad",
    id: "Cev_H2",
    keyCode: "67",
    keyTrigger: "C",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"

    }
  ];

  const [drums, setDrums] = useState(DATA);

  const [displayValue, setDisplayValue] = useState("Please press a key corresponding to a drum pad.");
 
  
// const keyCodes = drums.map((drum) => drum.keyCode);


//  function onKeyDown(event) {
//     keyCodes.includes(event.keyCode.toString()) === true ? setDisplayValue(event.id) : setDisplayValue("Please press a key corresponding to a drum pad.");
  
//   };

//   function handleClick() {

  // }
  // function play(event) {
  //   setDisplayValue(event.key)

  // }

//   useEffect(() => {

//     document.addEventListener("keydown", onKeyDown);
//     } 
//   )

// useEffect(() => {

//     document.addEventListener("click", onKeyDown);
//     } 
//   )

  return (
    <div id="drum-machine" className="drum-machine">
      <Header></Header>

      <div className="main-container">

        <div className="drumkit-container">
          <Drumkit drums={drums} displayValue={displayValue} setDisplayValue={setDisplayValue}></Drumkit>
        </div>

        <div className="display-container">
          <Display displayValue={displayValue}></Display>
        </div>

      </div>
      
    </div>
  );
}

export default App;