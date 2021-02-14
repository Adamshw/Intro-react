import React from 'react';

// to render components
import CountButton from './CountButton/CountButton'
import SearchBar from './SearchBar/SearchBar'

const App = () => {
  
  return (
      <div>
        <CountButton incrementBy={1} buttonColor={"blue"}/>
        <CountButton incrementBy={20} buttonColor={"green"}/>
        <SearchBar />
      </div>
  )
}

//App code will be available for other files
export default App