import React, { useEffect } from "react";
import ProductsTemplatesItem from './../LandingPage/ProductsTemplates/ProductsTemplatesItem/ProductsTemplatesItem'
import './AllProducts.css'

const AllProducts = (props) => {

    const ProductsTemplatesItemElements = props.products.map(e => (<ProductsTemplatesItem id={e.id} name={e.name} img={e.img} price={e.price} desc={e.desc} />))

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="container-fluid all-products-content">
            <div className="container">
                <div className="row products-templates">
                    <div className="row">
                        {ProductsTemplatesItemElements}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProducts;