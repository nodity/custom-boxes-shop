import React from "react";
import start from './../../../img/start-page-img.png'
import './StartPage.css'

const StartPage = (props) => {
    return (
        <div className="row">
            <div className="col-sm start-page-text">
                <h1>Fast and easy custom boxes your customers will love</h1>
                <p>Fastest turnaround. Best prices instantly. Dieline design help available.</p>
                <a href="#">Start your design</a>
            </div>
            <div className="col-sm" align='right'>
                <img src={start} alt="" />
            </div>
        </div>
    )
}

export default StartPage;
