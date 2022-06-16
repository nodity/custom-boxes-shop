import React from "react"
import './Request.css'
import quote from './../../../img/quote.png';
import dieline from './../../../img/dieline.png';

const Request = (props) => {
    return (
        <div className="row request-items">
            <div className="col-sm request-items-conent">
                <img src={quote} alt="" />
                <h2>Couldn't find a size you need?</h2>
                <p>We’ll work directly with you to create a fully <br /> branded packaging system.</p>
                <a href="#">Request a quote</a>
            </div>
            <div className="col-sm request-items-conent" align='right'>
                <img src={dieline} alt="" />
                <h2>Need a free dieline template?</h2>
                <p>Let us know what size you need and we'll email an <br /> Adobe Illustrator dieline to you within 3-4 business <br /> days.</p>
                <a href="#">Request dieline</a>
            </div>
        </div>
    )
}

export default Request