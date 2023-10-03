import Drumpad from './Drumpad.js';

const Drumkit = ( ...drums) => {

  return (
    <>
      
      { drums.map((drum, index) => (
        <Drumpad {...drum} key={index}></Drumpad>
        ))}
    </>

  )
}
export default Drumkit