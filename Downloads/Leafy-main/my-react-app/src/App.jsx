import React ,{useState}from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'; 
import Shop from './components/shop'; 
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import Login from './account/Login';
import Register from './account/Register';
import Checkout from './checkout/Checkout';
import Confirmation from './checkout/Confirmation';
import Guides from './guides/Guides';
import BestOils from './guides/BestOils';
import HowToTakeCare from './guides/HowToTakeCare';
import BestPots from './guides/BestPots';
import PetFriendly from './guides/PetFriendly';
import BestShadedArea from './guides/BestShadedArea';
import BestSoil from './guides/BestSoil';
import Detect from './detect/Detect';
import Home from './home/Home';
import AdminDashboard from './admin/AdminDashboard';
import { CartProvider } from './cart/CartContent';









const App = () => {
 
  return (
    <div className='App'>
    
<CartProvider>
      <BrowserRouter>
  
        <Routes>
        <Route path='/' element={<Home/>}></Route>
         
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/login" element={<Login/>}> </Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/checkout' element={<Checkout/>}></Route>
          <Route path='/confirmation/:orderId' element={<Confirmation/>}></Route>
          <Route path='/guides' element={<Guides/>}></Route>
          <Route path='/BestOils' element={<BestOils/>}> </Route>
          <Route path='/HowToTakeCare' element={<HowToTakeCare/>}> </Route>
          <Route path='/BestPots' element={<BestPots/>}></Route>
          <Route path='/PetFriendly' element={<PetFriendly/>}></Route>
          <Route path='/BestShadedArea' element={<BestShadedArea/>}></Route>
          <Route path='/BestSoil' element={<BestSoil/>}></Route>
          <Route path='/detect' element={<Detect/>}></Route>
          <Route path='/adminDashboard' element={<AdminDashboard/>}></Route>
       
         
  
         

          
        </Routes>
     
      </BrowserRouter>
      </CartProvider>
    </div>
  );
};

export default App;
