import React from "react"
import logo from './../../../img/logo.png'
import facebook from './../../../img/facebook.png'
import twitter from './../../../img/twitter.png'
import insta from './../../../img/insta.png'


import './Footer.css'


const Footer = (props) => {
    return (
        <div className="row footer-content">
            <div className="col-sm">
                <a href="#"><img src={logo} alt="" /></a>
            </div>
            <div className="col-sm">
                <ol>
                    <li><a href="#">Custom Design</a></li>
                    <li><a href="#">All Products</a></li>
                    <li><a href="#">Inspiration</a></li>
                    <li><a href="#">Sustainability</a></li>
                    <li><a href="#">Affiliate Program</a></li>
                    <li><a href="#">Request Custom Quote</a></li>
                    <li><a href="#">Request Dieline</a></li>
                </ol>
            </div>
            <div className="col-sm">
                <ol>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Partners</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                </ol>
            </div>
            <div className="col-sm">
                <ol>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Partners</a></li>
                    <li>
                        <a href="#"><img src={facebook} alt="" /></a>
                        <a href="#"><img src={twitter} alt="" /></a>
                        <a href="#"><img src={insta} alt="" /></a>
                    </li>
                </ol>
            </div>
            <div className="col-sm">
                <span>Get exclusive offers and tips.</span>
                <input placeholder="Your email" type="text" />
                <button>Join instantly</button>
            </div>
        </div>
    )
}

export default Footer;