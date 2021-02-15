import React, {useState, useEffect} from 'react';
import "./CountButton.css";
// Component
const CountButton = (props) =>{
  const [currentCount, setCurrentCount] = useState(0);
  
  const handleClick = () => {
    setCurrentCount(currentCount + props.incrementBy)
  }

  const buttonStyle = {
    background : props.buttonColor,
    
  }

return(
  <div>
    <button style={buttonStyle}
     onClick={handleClick}>+{props.incrementBy}</button>
    <div className="count-display"> {currentCount}</div>
  </div>
)
}




export default CountButton