import React, { useEffect } from "react"
import logo from './../../img/logo.png';
import cart from './../../img/cart.png';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {

    return (
        <div className="row header-row align-items-center">
            <div className="col-sm logo">
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className="col-sm-9 menu-links">
                <Link to="/products">All products</Link>
                <Link to="#">Inspiration</Link>
                <Link to="#">About</Link>
            </div>
            <div className="col-sm account ">
                {!props.isLogIn
                    ? <Link to="/login">Login</Link>
                    : <Link to="/cart"><span>{props.profile.cart.length}</span><img src={cart} alt="" /></Link>
                }
                {props.isLogIn &&
                    <Link onClick={props.setLogout} to="/">Logout</Link>
                }

            </div>
        </div>
    )
}

export default Header;