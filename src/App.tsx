import ProductDetail from "./propsSample/ProductDetail";


function App() {

  var productPoints: number[] = [2, 5, 10, 3, 8];

  return <>
    <ProductDetail name='IPhone' price={3000} stock={20} points={productPoints} />
  </>
}

export default App;

//props, useState, useEffect
