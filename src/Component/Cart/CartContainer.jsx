import React from "react"
import { compose } from "redux"
import { connect } from 'react-redux';
import Cart from "./Cart"
import { removeProduct } from "../../store/profileReducer";
import { removeFromCart } from "../../store/productsReducer";

const CartContainer = (props) => {

    return (
        <Cart removeFromCart={props.removeFromCart} removeProduct={props.removeProduct} isLogIn={props.isLogIn} cartLen={props.cartLen}  cart={props.cart} />
    )
}

let mapStateToProps = (state) => {
    return {
        isLogIn: state.profile.isLogIn,
        cart: state.profile.profile.cart,
        cartLen: state.profile.cartLen
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        removeProduct: (id) => {
            dispatch(removeProduct(id))
        },

        removeFromCart: (name) => {
            dispatch(removeFromCart(name))
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
)(CartContainer)