import Drumpad from './Drumpad.js';
// .styleName="drum-pad-triggered"

const Drumkit = ({drums}) => {

  return (
    <>
      {drums.map((drum, index) => (
        <Drumpad key={index} {...drum}></Drumpad>
        ))
      }
    </>

  )
}
export default Drumkit