import { compose } from "redux"
import { connect } from "react-redux"
import ProductPage from "./ProductPage"
import { addNewProduct, addProductCount } from "../../store/profileReducer"
import { setIsInCart } from "../../store/productsReducer"

const ProductPageContainer = (props) => {

    let currentProductId = window.location.pathname.split('/products/')[1]
    let currentProduct = undefined

    for (let i = 0; i < props.products.length; i++) {
        if (props.products[i].id == currentProductId) {
            currentProduct = props.products[i]
        }
    }

    return (
        <ProductPage setIsInCart={props.setIsInCart} addProductCount={props.addProductCount} addNewProduct={props.addNewProduct} profile={props.profile} isLogIn={props.isLogIn} product={currentProduct} />
    )
}

let mapStateToProps = (state) => {
    return {
        isLogIn: state.profile.isLogIn,
        profile: state.profile.profile,
        products: state.productsPage.products,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewProduct: (product) => {
            dispatch(addNewProduct(product))
        },

        addProductCount: (id, count) => {
            dispatch(addProductCount(id, count))
        },

        setIsInCart: (id) => [
            dispatch(setIsInCart(id))
        ]
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(ProductPageContainer)