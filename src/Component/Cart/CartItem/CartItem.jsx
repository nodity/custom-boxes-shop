import React from "react";
import { Link } from "react-router-dom";
import './CartItem.css'
import cross from './../../../img/cross.png'

const CartItem = (props) => {

    let removeFromCart = () => {
        props.removeProduct(props.name)
        props.removeFromCart(props.name)
    }

    return (
        <div className="row align-items-center cart-item">
            <div className="col-sm">
                <Link to={'/products/' + props.id}><img src={props.img} alt="" /></Link>
            </div>
            <div className="col-sm">
                <h3>{props.name}</h3>
            </div>
            <div className="col-sm">
                <p>{props.desc}</p>
            </div>
            <div className="col-sm">
                <span className="product-count">{props.count}</span>
            </div>
            <div className="col-sm">
                <span className="product-count">${+(props.price * props.count).toFixed(2)} <span className="per-unit-price">(${props.price}/unit)</span> </span>
            </div>
            <div className="col-sm">
                <button onClick={removeFromCart}><img src={cross} alt="" /></button>
            </div>
        </div>
    )
}

export default CartItem;