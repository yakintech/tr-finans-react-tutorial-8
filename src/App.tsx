import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AxiosGetSample from "./apiOperations/AxiosGetSample";
import FetchGetSample from "./apiOperations/FetchGetSample";
import AboutPage from "./pages/AboutPage";
import AddProductPage from "./pages/AddProductPage";
import CategoryDetail from "./pages/CategoryDetail";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProductsPage from "./pages/ProductsPage";
import SupplierPage from "./pages/supplier/SupplierPage";
import Intro from "./mui/Intro";
import GridSample from "./mui/GridSample";
import { Container } from "@mui/material";
import AddCategory from "./mui/AddCategory";
import ProductsDataGrid from "./mui/ProductsDataGrid";
import Style1 from "./styling/Style1";
import Box from "./styling/Box";
import Style3 from "./styling/Style3";
import StyleCompSample from "./styling/StyleCompSample";
import Favorites from "./pages/Favorites";
import CartPage from "./pages/CartPage";
import { useContext } from "react";
import { CartContext, CartContextType } from "./contextSample/CartContext";
import ParentComponent from "./memoSample/ParentComponent";
import RefHook from "./pages/RefHook";
import QuerySample from "./querySample/QuerySample";

function App() {

  const { cart } = useContext(CartContext) as CartContextType;



  return <>


    <ul style={{ display: 'flex', justifyContent: 'space-between' }}>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      <li><Link to='/products'>Products</Link></li>
      <li><Link to='/cart'>Cart <span style={{color:'red'}}>({cart.length})</span></Link></li>
      <li><Link to='/products/add'>Add Product</Link></li>
      <li><Link to='/suppliers'>Suppliers</Link></li>
      <li><Link to='/favorites'>Favorites</Link></li>
      <li><Link to='/memo'>Memo Sample</Link></li>
      <li><Link to='/ref'>Ref Sample</Link></li>
      <li><Link to='/query'>Query Sample</Link></li>


    </ul>

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/categories" element={<AxiosGetSample />} />
      <Route path='/categories/:id/:subid' element={<CategoryDetail />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:id" element={<ProductDetailPage />} />
      <Route path="/products/add" element={<AddProductPage />} />
      <Route path="/suppliers" element={<SupplierPage />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/memo" element={<ParentComponent/>} />
      <Route path="/ref" element={<RefHook/>} />
      <Route path="/query" element={<QuerySample/>} />


      <Route path='*' element={<NotFound />} />

    </Routes>

    <p>Footer</p>


  </>
}

export default App;




function Parent({children}: any){

  //
  //
  //
  if(true){
    return children;
  }
  else{
    return <h1>Yetkisiz Erişim</h1>
  }

}


function Child(){
  return <h1>Hello Child Comp</h1>
}
