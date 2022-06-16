import React from "react"
import './BrowseAll.css'

const BrowseAll = (props) => {
    return (
        <div className="row browse-all align-items-center">
            <div className="col-sm-9">
                <h2>Products you can customize</h2>
            </div>
            <div className="col-sm" align='right'>
               <a href="#">Browse all products</a>
            </div>
        </div>
    )
}

export default BrowseAll;