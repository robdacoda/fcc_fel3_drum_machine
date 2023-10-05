import {useState, useEffect } from "react";

const Drumpad = ({ displayValue, setDisplayValue, keyTrigger, keyCode, ...drum}) => {
  console.log("Top of the component 'Drumpad'");

 function doKeyDown(event) {
      console.log("Top of the function 'doKeyDown");
      console.log( toString(event.keyCode) === toString(keyCode));
      if( toString(event.keyCode) === toString(keyCode) ) {
        console.log("drum keyCode is " + keyCode);
        console.log("event.keyCode is " + event.keyCode);
        console.log("drum.id: " + drum.id);
        console.log("displayValue before: " + displayValue); 
        setDisplayValue(drum.id);
        console.log("displayValue after: " + displayValue);
      } 
    }

  // useEffect(() => {
         document.addEventListener("keydown", (event) => doKeyDown(event));

  // }, );

  
  // function play(id, src) {
  //   // setDisplayValue(drum.id);
  //   var x = document.getElementById(id);
  //   x.play(src);
  //   x.currentTime = 0;

  // }

 
// OnClick={play(drum.id, drum.src)}

  return ( 
  <h3 className={drum.className} >{keyTrigger}  <audio id={drum.id} src={drum.src}></audio> 
  </h3>  
  );
}

export default Drumpad