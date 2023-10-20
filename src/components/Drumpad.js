const Drumpad = ({keyTrigger, handleClick, ...drum}) => {

  console.log("Top of the component 'Drumpad'");

  return ( 
  <h3 className={drum.className} tabIndex={0} id={drum.id} onClick={() => {handleClick(keyTrigger, drum.id, drum.src)}}> {keyTrigger}  
    <audio id={keyTrigger} className="clip" src={drum.src} type="audio/wav" ></audio> 
  </h3>  
  );
}

export default Drumpad