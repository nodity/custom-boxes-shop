import { connect } from 'react-redux';
import {compose} from 'redux';
import ProductsTemplates from './ProductsTemplates';
import React from 'react';
import './ProductsTemplates.css'

const ProductsTemplatesContainer = (props) => {
    return (
        <ProductsTemplates products={props.products}/>
    )
}

let mapStateToProps = (state) => {
    return {
        products: state.productsPage.products,
    }
}

export default compose(
    connect(mapStateToProps, {}),
)(ProductsTemplatesContainer)