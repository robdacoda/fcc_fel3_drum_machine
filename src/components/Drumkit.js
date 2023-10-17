import Drumpad from './Drumpad.js';

const Drumkit = ({displayValue, setDisplayValue, drums}) => {

  const keyCodeArr = drums.map(item => item.keyCode)
  console.log(keyCodeArr);

  function doKeyDown(e) {
    console.log("doKeyDown called");

    let obj = drums.find(drum => drum.keyCode === e.keyCode.toString());
  
    setDisplayValue(obj.id);
    playSound(obj.keyTrigger, obj.id, obj.src);

   
  };

  function handleClick(keyTrigger, id, src) {
    console.log("handleClick called.");

    setDisplayValue(id);
    playSound(keyTrigger, id, src);
  
  };

  function playSound(keyTrigger, id, src) {
    console.log("playSound called")

    const currentAudio = document.getElementById((keyTrigger));

    currentAudio.currentTime = 0;
    currentAudio.volume = 1;
    currentAudio.play();
  
  }

  document.addEventListener("keydown", (event) => doKeyDown(event));


  return ( 
    <>
    {drums.map((drum, index) => (
      <Drumpad key={index.toString()} keyTrigger={drum.keyTrigger} handleClick={handleClick} {...drum}></Drumpad>
    ))}
    
    </>
  )
}

export default Drumkit