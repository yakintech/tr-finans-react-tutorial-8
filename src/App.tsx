import ProductDetail from "./propsSample/ProductDetail";
import StateSample1 from "./stateSample/StateSample1";
import StateSample2 from "./stateSample/StateSample2";


function App() {

  var productPoints: number[] = [2, 5, 10, 3, 8];

  return <>
    <StateSample2 />
    {/* <ProductDetail name='IPhone' price={3000} stock={20} points={productPoints} /> */}
  </>
}

export default App;

//props, useState, useEffect
