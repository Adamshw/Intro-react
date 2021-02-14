import React, {useState} from 'react';
import './SearchBar.css';

const SearchBar = () => {

//piece of state  
// peice  of state willl be updated by the user
// we want to render this update on UI by using hooks
const [searchValue, setSerachValue] = useState(' ')

const handleInputChange = (e) => {
  setSerachValue(e.target.value)
}
  return (
    <div>
      <input type="text" value={searchValue} onChange={handleInputChange}/>
    </div>

  )
}


export default SearchBar