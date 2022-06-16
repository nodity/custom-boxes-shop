import React from "react"
import './ProductsTemplatesItem.css'

const ProductsTemplatesItem = (props) => {
    return (
        <div className="products-templates-item">
            <div className="row">
                <div className="col-sm">
                    <a href="#"><img className="product-img" src={props.img} alt="" /></a>
                </div>
            </div>
            <div className="products-templates-item-desc">
                <div className="row">
                    <div className="col-sm">
                        <h3>{props.name}</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <p>{props.desc}</p>
                    </div>
                    <div className="col-sm">
                        <span>Starting at: ${props.price}/unit</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsTemplatesItem