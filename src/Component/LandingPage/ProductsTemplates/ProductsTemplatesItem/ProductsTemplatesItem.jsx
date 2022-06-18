import React from "react"
import './ProductsTemplatesItem.css'
import { Link } from "react-router-dom"

const ProductsTemplatesItem = (props) => {
    return (
        <div className="products-templates-item">
            <div className="row">
                <div className="col-sm">
                    <Link to={'/products/' + props.id}><img className="product-img" src={props.img} alt="" /></Link>
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