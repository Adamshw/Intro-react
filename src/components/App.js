import React from 'react';

// to render components
import CountButton from './CountButton/CountButton'
import SearchBar from './SearchBar/SearchBar'


const App = () => {
  
  return (
      <div>
        <CountButton incrementBy={5} buttonColor= "white"/>
        {/* <CountButton incrementBy={1} buttonColor={"blue"}/>
        <CountButton incrementBy={20} buttonColor={"green"}/> */}
        {/* <SearchBar
         products={[
            "tooth paste",
            "tooth brush",
            "mouth wash",
            "dental floss",
            "mouth guard",
          ]}
        />
        <SearchBar products={["bike rack", "mountain bike", "soccer ball"]}/> */}
      </div>
  )
}

//App code will be available for other files
export default App