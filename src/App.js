
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/login-signup pages/Login';
import Signup from './components/login-signup pages/Signup';
import Products from './components/products/Products';
import ProductDetails from './components/products/ProductDetails';
import { CartProvider } from './context/CartContext';
import Checkout from './components/products/Checkout';
import Favourite from './components/products/Favourite';
import Footer from './components/Footer/Footer';

function App() {
    const userDataObject = JSON.parse(localStorage.getItem("User Data")||false);
  const [isLoggedIn, setIsLoggedIn] = useState(userDataObject.isLogin);
  
  return (
    <CartProvider>
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home /> <Products /> <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/product/:id"
          element={<ProductDetails isLoggedIn={isLoggedIn} />}
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
