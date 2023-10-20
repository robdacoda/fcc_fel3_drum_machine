import {useState, useEffect } from "react";
import './App.css';
import Header from './components/Header.js';
import Display from './components/Display.js';
import Drumkit from './components/Drumkit.js';

import './doh2.mp3';

function App() {
  const DATA = [
    {
    className: "drum-pad clip",
    id: "Heater-1",
    keyCode: "81",
    keyTrigger: "Q",
    src: "./doh2.wav"
    // src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"

    },
    {
    className: "drum-pad clip",
    id: "Heater-2",
    keyCode: "87",
    keyTrigger: "W",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"

    },
    {
    className: "drum-pad clip",
    id: "Heater-3",
    keyCode: "69",
    keyTrigger: "E",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"

    },
    {
    className: "drum-pad clip",
    id: "Heater-4",
    keyCode: "65",
    keyTrigger: "A",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"

    },
    {
    className: "drum-pad clip",
    id: "Heater-6",
    keyCode: "83",
    keyTrigger: "S",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"

    },
    {
    className: "drum-pad clip",
    id: "Dsc_Oh",
    keyCode: "68",
    keyTrigger: "D",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"

    },
    {
    className: "drum-pad clip",
    id: "Kick_n_Hat",
    keyCode: "90",
    keyTrigger: "Z",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"

    },
    {
    className: "drum-pad clip",
    id: "RP4_Kick_1",
    keyCode: "88",
    keyTrigger: "X",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"

    },
    {
    className: "drum-pad clip",
    id: "Cev_H2",
    keyCode: "67",
    keyTrigger: "C",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"

    }
  ];

   const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  const [drums, setDrums] = useState(DATA);

  const [displayValue, setDisplayValue] = useState("Please press a key corresponding to a drum pad.");
 
  const [content, setContent] = useState(lorem);

//   useEffect(() => {

// // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing

//   const log = document.querySelector(".event-log");
//   const athing = document.querySelector("#xhr");
//   console.log("athing is: ", athing);
//   console.log("log is: ", log);
  
// // Console.logs below are to show that content and setContent work, or don't work.  Interestingly, upon loading, the console shows content as lorem, both before and after using setContent, while the display shows content as "test".  After clicking the request button, these console logs are not re-run, so it looks as though the useEffect is running once, but everything in the addEventListener is in an event loop, so the console.logs directly above and below this loop are never seen again.  

//   console.log("content is: ", content);
//   setContent("test");
//   console.log("after using setContent, content is: ", content);


//   document.querySelector("#xhr").addEventListener("click", () => {
//     log.textContent = "";

//     const xhr = new XMLHttpRequest();
    
//     const rawData = xhr.responseText;
//     console.log("rawData is: ", rawData);


//     xhr.addEventListener("loadend", () => {
//       log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;

//     });

//     xhr.open(
//       "GET",
//       "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
//     );

//     console.log("Now 1, rawData is: ", rawData);

//     xhr.send();

//     console.log("Now 2, rawData is: ", rawData);

//     log.textContent = `${log.textContent}Started XHR request\n`;

//     console.log("xhr is: ", xhr);
//     console.log("Now 3, rawData is: ", rawData);

//   });

//   document.querySelector("#reload").addEventListener("click", () => {
//     log.textContent = "";
//     document.location.reload();
//   });
//   }, []);


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

        <div className="log-container">
          
          <button id="xhr" className="button">Click to start request</button>
          <button id="reload" className="button">Reload</button>
        
          <pre readOnly className="event-log"></pre>

        </div>

        <div className="content-container">{content}
        </div>


      </div>
      
    </div>
  );
}

export default App;