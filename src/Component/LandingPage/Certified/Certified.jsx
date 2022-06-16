import React from "react"
import './Certified.css'
import shopify from './../../../img/shopify.png';
import amazon from './../../../img/amazon.png'
import eco from './../../../img/eco.png';


const Certified = (props) => {
    return (
        <div className="row align-items-center">
            <div className="col-sm certified-block-item">
                <img src={shopify} alt="" />
                <span>Shopify Integrated</span>
            </div>
            <div className="col-sm certified-block-item">
                <img src={amazon} alt="" />
                <span>Amazon Certified</span>
            </div>
            <div className="col-sm certified-block-item">
                <img src={eco} alt="" />
                <span>Eco-Friendly</span>
            </div>
        </div>
    )
}

export default Certified;
