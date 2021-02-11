import React, {useState} from 'react';

// Component
const CountButton = () =>{
  const [currentCount, setCurrentCount] = useState(0);
  
  const handleClick = () => {
    setCurrentCount(currentCount + 1)
  }

return(
  <div>
    <button
     onClick={handleClick}>+1</button>
    <div>{currentCount}</div>
  </div>
)
}




export default CountButton