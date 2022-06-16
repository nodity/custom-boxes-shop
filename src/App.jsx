import './App.css';
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderContainer from './Component/Header/HeaderContainer';
import LandingPage from './Component/LandingPage/LandingPage';
import { Routes, Route } from 'react-router-dom';
import AllProductsContainer from './Component/AllProducts/AllProductsContainer';
import Footer from './Component/Footer/Footer';
import LoginContainer from './Component/Login/LoginContainer';


let App = (props) => {

  return (
    <div id='page-start' className="App">
      <div className="container-fluid">
        <HeaderContainer />
      </div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/products' element={<AllProductsContainer />} />
        <Route path='/login' element={<LoginContainer />}/>
      </Routes>
      <div className="container-fluid footer-block">
        <div className="container">
          <Footer />
        </div>
      </div>
    </div>
  );
}







export default App;
