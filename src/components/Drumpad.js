const Drumpad = ({ keyTrigger, keyCode, ...drum}) => {
  console.log("Hellooooo");
  console.log({keyTrigger});
  console.log({drum})
  console.log("3 " + drum.className)

  // function doKeyDown(event) {
  //   if( event.keyCode === drum.keyCode )
  //   play();

  // }


  // function play() {
  //   setDisplayValue(drum.id);
  //   var audio = document.getElementById(drum.id);
  //   audio.play();
  //   audio.currentTime = 0;

  // }

  // document.addEventListener("keydown", (event) => doKeyDown(event));


  // useEffect(() => {

  //   } 
  // );

  // useEffect(() => {

  //   } 
  // );

  // <audio id={drum.id} src={drum.src}></audio> 

  return ( 
  <h3 className={drum.className} >{keyTrigger}
 
 </h3>  
  );

}
export default Drumpad