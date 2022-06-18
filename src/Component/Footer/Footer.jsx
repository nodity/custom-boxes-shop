import React from "react"
import logo from './../../img/logo.png'
import facebook from './../../img/facebook.png'
import twitter from './../../img/twitter.png'
import insta from './../../img/insta.png'
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";


import './Footer.css'


const Footer = (props) => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        props.addMail(data.mail)
    };

    return (
        <div className="row footer-content">
            <div className="col-sm">
                <Link to="/"><img src={logo} alt="" /></Link>
            </div>
            <div className="col-sm">
                <ol>
                    <li><Link to="#">Custom Design</Link></li>
                    <li><Link to="/products">All Products</Link></li>
                    <li><Link to="#">Inspiration</Link></li>
                    <li><Link to="#">Sustainability</Link></li>
                    <li><Link to="#">Affiliate Program</Link></li>
                    <li><Link to="#">Request Custom Quote</Link></li>
                    <li><Link to="#">Request Dieline</Link></li>
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
                    <li><a href="#">Shopify App</a></li>
                    <li><a href="#">14 Day Free Shopify Trial</a></li>
                    <li><a href="#">BigCommerce</a></li>
                    <li>
                        <a href="#"><img src={facebook} alt="" /></a>
                        <a href="#"><img src={twitter} alt="" /></a>
                        <a href="#"><img src={insta} alt="" /></a>
                    </li>
                </ol>
            </div>
            <div className="col-sm">
                <span>Get exclusive offers and tips.</span>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register('mail', {required: true, pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})} placeholder="Your email" type="text" />
                    <input className="submit-button" type="submit" value='Join instantly' />
                </form>
            </div>
        </div>
    )
}

export default Footer;