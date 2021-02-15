import React, {useState} from 'react';
import './SearchBar.css';

const SearchBar = (props) => {

//piece of state  
// peice  of state willl be updated by the user
// we want to render this update on UI by using hooks
// use State hooks
const [searchValue, setSerachValue] = useState('')

const handleInputChange = (e) => {
  setSerachValue(e.target.value)
}

const handleClearClick = () => {
  setSerachValue("");
}

const displayButton = searchValue.length > 0;

const filterdProducts = props.products.filter((prodcut)=>{
  return prodcut.includes(searchValue)
})

  return (
    <div>
      <input type="text" value={searchValue} onChange={handleInputChange}/>

       {/* if the first condition (diplayButton) is true, the second condition will be rendered
       short-circuiting evaluation
       it's called conditional rendering */}
      {displayButton && <button onClick={handleClearClick}>Clear</button>}


      <ul>
        {filterdProducts.map((product) => {
          return <li key={product}>{product}</li>
        })} 
      </ul>
    </div>

  )
}


export default SearchBar