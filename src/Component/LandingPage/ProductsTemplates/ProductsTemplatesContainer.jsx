import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {compose} from 'redux';
import ProductsTemplates from './ProductsTemplates';
import React from 'react';
import './ProductsTemplates.css'

const ProductsTemplatesContainer = (props) => {
    debugger;
    return (
        <ProductsTemplates products={props.products}/>
    )
}

let mapStateToProps = (state) => {
    debugger;
    return {
        products: state.productsPage.products,
    }
}

export default compose(
    connect(mapStateToProps, {}),
)(ProductsTemplatesContainer)