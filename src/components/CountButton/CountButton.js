import React, {useState, useEffect} from 'react';
import "./CountButton.css";
// Component
const CountButton = (props) =>{

  // peice of state
  const [currentCount, setCurrentCount] = useState(0);
  
  const handleClick = () => {
    setCurrentCount(currentCount + props.incrementBy)
  }

  const buttonStyle = {
    background : props.buttonColor,
    
  }
  // useEffect:
  //1. the arrow function is called when the component mounts
  //2. we pass methods we want to be called to the array (Dependency array)
  useEffect( () =>{
    if(currentCount === 10){
      console.log("Hello from the other side")
    }

  }, [currentCount] )

return(
  <div>
    <button style={buttonStyle}
     onClick={handleClick}>+{props.incrementBy}</button>
    <div className="count-display"> {currentCount}</div>
  </div>
)
}




export default CountButton