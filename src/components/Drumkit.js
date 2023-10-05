import Drumpad from './Drumpad.js';

const Drumkit = ({displayValue, setDisplayValue, drums}) => {

  return ( 
    <>
    {drums.map((drum, index) => (
      <Drumpad key={index} displayValue={displayValue} setDisplayValue={setDisplayValue} {...drum}></Drumpad>
    ))}
    
    </>
  )
}


// const Drumkit = ({drums}) => {
// console.log("testing456");
//     return (
//       <>
//       {drums.map((drum, index) => (
//         <div key={index} id={drum.id} className={drum.className} >{drum.keyTrigger}</div>
//         ))}
//     </>

//   )
// }
export default Drumkit