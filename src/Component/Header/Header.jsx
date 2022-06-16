import React from "react"
import logo from './../../img/logo.png';
import cart from './../../img/cart.png';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = (props) => {
    return (
        <div className="row header-row align-items-center">
            <div className="col-sm logo">
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className="col-sm-9 menu-links">
                <Link to="#">Start your design</Link>
                <Link to="/products">All products</Link>
                <Link to="#">Inspiration</Link>
                <Link to="#">About</Link>
            </div>
            <div className="col-sm account ">
                <Link to="#">Account</Link>
                <Link to="#"><img src={cart} alt="" /></Link>
            </div>
        </div>
    )
}

export default Header;