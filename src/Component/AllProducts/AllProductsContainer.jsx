import React from "react"
import { compose } from "redux"
import { connect } from "react-redux"
import AllProducts from "./AllProducts"

let AllProductsContainer = (props) => {
    return (
        <AllProducts products={props.products}/>
    )
}

let mapStateToProps = (state) => {
    return {
        products: state.productsPage.products
    }
}

export default compose(
    connect(mapStateToProps, {} ),
)(AllProductsContainer)