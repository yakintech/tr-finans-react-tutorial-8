import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AxiosGetSample from "./apiOperations/AxiosGetSample";
import FetchGetSample from "./apiOperations/FetchGetSample";
import AboutPage from "./pages/AboutPage";
import CategoryDetail from "./pages/CategoryDetail";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

function App() {


  return <>


      <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
      </ul>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/categories" element={<AxiosGetSample/>} />
        <Route path='/categories/:id/:subid' element={<CategoryDetail/>} />
        <Route path='*' element={<NotFound/>} />

      </Routes>

      <p>Footer</p>


  </>
}

export default App;

//props, useState, useEffect
