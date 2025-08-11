import './App.css';
import Navbar from './Components/Navbar/Navbar';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Product from './Pages/Product'
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import AllProducts from './Pages/AllProducts';

import Footer from './Components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CheckoutPage from './Pages/CheckoutPage';
import ContactezNous from './Pages/ContactezNous';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar />
       <Routes>
          <Route path='/' element={<Shop/>} />
          
          <Route path='/homme' element={<ShopCategory  category="men"/>} />
          <Route path='/femme' element={<ShopCategory  category="women" />} />
          <Route path='/enfants' element={<ShopCategory  category="kid" />} />
          <Route path='/couples' element={<ShopCategory  category="couple" />} />
          <Route path='/product/:productId' element={<Product />} />


          <Route path='/all-products' element={<AllProducts />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />

          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/contact' element={<ContactezNous />} />

        </Routes>
        <Footer />
      </BrowserRouter>
      
      
    </div>
  );
}

export default App;
