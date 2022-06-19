import React, { useEffect } from "react";
import start from './../../../img/start-page-img.png'
import './StartPage.css'
import { Link } from "react-router-dom";

const StartPage = (props) => {
    
    return (
        <div className="row">
            <div className="col-sm start-page-text">
                <h1>Fast and easy custom boxes your customers will love</h1>
                <p>Fastest turnaround. Best prices instantly. Dieline design help available.</p>
                <Link to="/products">All products</Link>
            </div>
            <div className="col-sm" align='right'>
                <img src={start} alt="" />
            </div>
        </div>
    )
}

export default StartPage;
