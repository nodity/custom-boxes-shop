import "./App.css";
import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderContainer from "./Component/Header/HeaderContainer";
import LandingPage from "./Component/LandingPage/LandingPage";
import { Routes, Route } from "react-router-dom";
import AllProductsContainer from "./Component/AllProducts/AllProductsContainer";
import FooterContainer from "./Component/Footer/FooterContainer";
import LoginContainer from "./Component/Login/LoginContainer";
import ProductPageContainer from "./Component/ProductPage/ProductPageContainer";
import CartContainer from "./Component/Cart/CartContainer";

let App = (props) => {
  return (
    <div id="page-start" className="App">
      <div className="container-fluid">
        <HeaderContainer />
      </div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<AllProductsContainer />} />
        <Route path="/login" element={<LoginContainer />} />
        <Route path="/products/:id" element={<ProductPageContainer />} />
        <Route path="/cart" element={<CartContainer />} />
      </Routes>
      <div className="container-fluid footer-block">
        <div className="container">
          <FooterContainer />
        </div>
      </div>
    </div>
  );
};

export default App;
