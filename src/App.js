import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './components1/Signup';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components1/Login';
import Home from './components1/Home';
import About from './components1/About';
import Contact from './components1/Contact';
import Wishlist from './components1/Wishlist';
import Books from './components1/Books1';
import BookDetails from "./components1/BookDetails";
import React,{useState} from 'react';
import { CartProvider } from './components1/CartProvider';
function App() {
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const addToCart = (item) => {
    setCart([...cart, item]);
    setTotalAmount(totalAmount + item.price);
  }
  
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
           
          <Routes>
            <Route path='/' element={<Signup/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path="/wishlist" element={<Wishlist cart={cart} />} />
            <Route
            path="/books"
            element={
              <Books
                cart={cart}
                setCart={setCart}
                totalAmount={totalAmount}
                setTotalAmount={setTotalAmount}
              />
            }
          />
          </Routes>
        </BrowserRouter>
        </CartProvider>
    </div>
  );
}

export default App;
