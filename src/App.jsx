import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import LandingPage from './Component/LandingPage/LandingPage';
import {Routes, Route} from 'react-router-dom';
import AllProducts from './Component/AllProducts/AllProducts';


let App = (props) => {
  return (
    <div className="App">
      <div className="container-fluid">
        <Header />
      </div>
      <Routes>
        <Route path='/' element={<LandingPage />}/>
        <Route path='/products' element={<AllProducts />}/>
      </Routes>
    </div>
  );
}







export default App;
