import React, {useState, useEffect} from 'react';

// to render components
import CountButton from './CountButton/CountButton'
import SearchBar from './SearchBar/SearchBar'


const App = () => {


  const [productsState, setProductsState] = useState([])

  useEffect(() =>{
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((productsArray) => {
        const newProductsState = productsArray.map((products) =>{
            return products.title
        })
        setProductsState(newProductsState)
      })
      // setTimeout(() => {
      //   setProductsState([
      //       "tooth paste",
      //       "tooth brush",
      //       "mouth wash",
      //       "dental floss",
      //       "mouth guard",
      //     ])
      // }, 2000)
    }, []);

    const hasProducts = productsState.length > 0;
  
  return (
      <div>
        {/* <CountButton incrementBy={5} buttonColor= "white"/> */}
        {/* <CountButton incrementBy={1} buttonColor={"blue"}/>
        <CountButton incrementBy={20} buttonColor={"green"}/> */}
        {hasProducts ? <SearchBar products={productsState} /> : "Loading..."}
        {/* <SearchBar products={["bike rack", "mountain bike", "soccer ball"]}/> */}
      </div>
  )
}

//App code will be available for other files
export default App