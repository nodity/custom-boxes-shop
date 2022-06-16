import React from "react"
import './BrowseAll.css'
import { Link } from 'react-router-dom'

const BrowseAll = (props) => {
    return (
        <div className="row browse-all align-items-center">
            <div className="col-sm-9">
                <h2>Products you can customize</h2>
            </div>
            <div className="col-sm" align='right'>
                <Link to="/products">Browse all products</Link>
            </div>
        </div>
    )
}

export default BrowseAll;