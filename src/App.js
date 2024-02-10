import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Cartpage from './pages/cartpage';
import Homepage from './pages/homepage';
import Loginpage from './pages/loginpage';
import Registerpage from './pages/registerpage';
import Languagepage from './pages/languagepage';
import Productpage from './pages/productpage';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path='/cart' element={<Cartpage/>} />
        <Route path='/login' element={<Loginpage/>} />
        <Route path='/register' element={<Registerpage/>} />
        <Route path='/language' element={<Languagepage/>} />
        <Route path='/product' element={<Productpage/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
