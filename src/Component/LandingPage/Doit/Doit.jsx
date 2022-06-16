import React from "react"
import './Doit.css'
import {Link} from 'react-router-dom'

const Doit = (props) => {
    return (
        <div className="row doit-content">
            <div className="row">
                <div className="col-sm">
                    <h3>Let`s get to it</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-sm">
                    <Link to="#">Start your design</Link>
                    <Link to="/products">Browse all products</Link>
                </div>
            </div>
        </div>
    )
}

export default Doit;