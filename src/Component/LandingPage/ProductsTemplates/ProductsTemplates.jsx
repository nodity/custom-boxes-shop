import React from "react";
import ProductsTemplatesItem from "./ProductsTemplatesItem/ProductsTemplatesItem";

const ProductsTemplates = (props) => {


    const ProductsTemplatesItemElements = props.products.map(e => (
        e.id < 6 ? <ProductsTemplatesItem id={e.id} name={e.name} img={e.img} price={e.price} desc={e.desc}/> : <div></div>
    ))

    return (
        <div className="row products-templates">
            <div className="row">
                {ProductsTemplatesItemElements}
            </div>
        </div>
    )
}



export default ProductsTemplates;