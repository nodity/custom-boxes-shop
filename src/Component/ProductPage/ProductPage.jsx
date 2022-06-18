import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './ProductPage.css'

const ProductPage = (props) => {


    let [productCount, setProductCount] = useState(0);

    let navigate = useNavigate()

    const addToCart = () => {
        if (productCount != 0) {
            if (props.isLogIn) {
                if (props.product.isInCart) {
                    props.addProductCount(props.product.id, productCount)
                } else {
                    props.setIsInCart(props.product.id)
                    let tempObj = props.product
                    tempObj['count'] = productCount
                    props.addNewProduct(tempObj)
                }

                setProductCount(0)
            } else {
                alert('Вы не выполнили вход')
                return navigate('/login')
            }
        } else {
            alert('Вы не добавили ни одного товара')
        }
    }


    return (
        <div className="container-fluid product-page">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 product-page-main" align='center'>
                        <h1>{props.product.name}</h1>
                        <img src={props.product.img} alt="" />
                        <p>{props.product.desc}</p>
                    </div>
                    <div className="col-sm product-page-main" align='right'>
                        <h2>Composition</h2>
                        <ol>
                            <li>someFeature1</li>
                            <li>someFeature2</li>
                            <li>someFeature3</li>
                            <li>someFeature4</li>
                            <li>someFeature5</li>
                        </ol>
                        <div className="price"><span>Price starting at:</span>{props.product.price}$/<span>unit</span></div>
                        <button onClick={() => productCount > 0 ? setProductCount(--productCount) : {}} className="plus-minus-buttons">-</button><span className="product-count">{productCount}</span><button onClick={() => setProductCount(++productCount)} className="plus-minus-buttons">+</button>
                        <button className="add-to-cart" onClick={addToCart} >Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage;