import React from "react";
import CartItem from "./CartItem/CartItem";
import './Cart.css';

const Cart = (props) => {

    let cartElements = props.cart.map((e) => {
        return (
            <CartItem removeFromCart={props.removeFromCart} removeProduct={props.removeProduct} id={props.id} img={e.img} name={e.name} desc={e.desc} price={e.price} count={e.count} />
        )
    })

    return (
        <div className="container-fluid cart-page">
            <div className="container">
                {props.cartLen == 0 &&
                    <div className="row">
                        <div className="col-sm">
                            <span className="empty-cart">HERE IS EMPTY NOW</span>
                        </div>
                    </div>
                }
                {cartElements}
                {props.cartLen != 0 &&
                    <div className="row">
                        <div className="col-sm">
                            <button className="order-button">Make order</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Cart;