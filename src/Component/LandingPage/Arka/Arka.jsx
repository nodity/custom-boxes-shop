import React from "react"
import './Arka.css'
import ecomat from './../../../img/ecomat.png';
import outside from './../../../img/outside.png';
import proofing from './../../../img/proofing.png';

const Arka = (props) => {
    return (
        <div className="row arka-advantage">
            <div className="row">
                <div className="col-sm">
                    <h2>The Arka advantage</h2>
                </div>
            </div>
            <div className="row arka-advantage-content">
                <div className="col-sm-4 arka-advantage-content-item">
                    <img src={ecomat} alt="" />
                    <h3>Eco-Friendly Material</h3>
                    <p>Order as little as 10, giving you the lowest minimums in the industry at the best prices.</p>
                </div>
                <div className="col-sm-4 arka-advantage-content-item">
                    <img src={outside} alt="" />
                    <h3>Full Outside Print</h3>
                    <p>Design what you want - no extra cost! Prices include 100% exterior print, change design whenever!</p>
                </div>
                <div className="col-sm arka-advantage-content-item">
                    <img src={proofing} alt="" />
                    <h3>Proofing</h3>
                    <p>After you order, our internal designers help make sure your designs are 100% ready for printing!</p>
                </div>
            </div>
        </div>
    )
}

export default Arka;