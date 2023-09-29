import React from 'react';
import Drumpad from './Drumpad.js';

const Drumkit = () => {

   // const drumNames = ["High-Hat-Closed", "High-Hat-Open", "Crash", "Crash-Ride", "Snare", "Bass", "High-Tom", "Mid-Tom", "Splash-Rivets"];

   // const drumPadStyleNames = drumNames.map((item) => item.toLowerCase());

   // console.log(drumPadStyleNames);

   // const keyNames = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

   // const drumPadArray = [];

   // for (let i=0; i<9; i++) {
   // drumPadArray[i] = document.createElement("div");
   // drumPadArray[i].className="drum-pad";
   // drumPadArray[i].id=keyNames[i];
   // drumPadArray[i].innertext=keyNames[i];
   // drumPadArray[i].drumName=drumNames[i];
   // document.body.appendChild(drumPadArray[i]);
   // }

   const drumPads = props.tasks.map((pad) => (
    <Drumpad
      id={pad.id}
      name={pad.name}
      key={pad.id}
      />
   ));

  return (
      <>
       {drumPads.map((drumPad) => (
       <Drumpad key={drumPad.id} className={drumPad.className}>{drumPad.innerText}</div>
       ))}
      </>
  )
}
export default Drumkit