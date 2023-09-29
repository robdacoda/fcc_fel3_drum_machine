const Drumpad = ({keyTrigger, keyCode, ...drum}) => {
  console.log(keyTrigger);

  return ( 
  <h3 className={drum.className} >{keyTrigger}</h3>  
  )

}
export default Drumpad


