import React from "react"
import './StartDesign.css'
import order from './../../../img/order.png'
import proof from './../../../img/proof.png'
import print from './../../../img/print.png'

const StartDesign = (props) => {
    return (
        <div className="row start-design">
            <div className="row">
                <div className="col-sm">
                    <h1>Fast and easy custom boxes your customers will love</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm start-design-item">
                    <img src={order} alt="" />
                    <h4>You Order</h4>
                    <p>Design and order boxes in a few clicks.</p>
                </div>
                <div className="col-sm start-design-item">
                    <img src={proof} alt="" />
                    <h4>We Proof</h4>
                    <p>Approve your designs before production.</p>
                </div>
                <div className="col-sm start-design-item">
                    <img src={print} alt="" />
                    <h4>We Print & Ship</h4>
                    <p>Your order gets printed and shipped with tracking.</p>
                </div>
            </div>
            <div className="row call-to-action">
                <div className="col-sm">
                    <a href="#">Start your design</a>
                </div>
            </div>
        </div>
    )
}

export default StartDesign;