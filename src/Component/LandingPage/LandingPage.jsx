import React from "react"
import StartPage from './StartPage/StartPage'
import Certified from './Certified/Certified';
import BrowseAll from './BrowseAll/BrowseAll';
import ProductsTemplatesContainer from './ProductsTemplates/ProductsTemplatesContainer';
import ShopStock from './ShopStock/ShopStock';
import StartDesign from './StartDesign/StartDesign';
import Arka from './Arka/Arka';
import Request from './Request/Request';
import Doit from './Doit/Doit';
import Footer from './Footer/Footer';

const LandingPage = (props) => {
    return (
        <div className="">
            <div className="container-fluid start-page">
                <StartPage />
            </div>
            <div className="container-fluid certified-block">
                <div className="container">
                    <Certified />
                </div>
            </div>
            <div className="container-fluid customize-product-block">
                <div className="container">
                    <BrowseAll />
                    <ProductsTemplatesContainer />
                    <ShopStock />
                </div>
            </div>
            <div className="container-fluid start-design-block">
                <div className="container">
                    <StartDesign />
                </div>
            </div>
            <div className="container-fluid arka-block">
                <div className="container">
                    <Arka />
                </div>
            </div>
            <div className="container-fluid request-block">
                <div className="container">
                    <Request />
                </div>
            </div>
            <div className="container-fluid doit-block">
                <div className="container">
                    <Doit />
                </div>
            </div>
            <div className="container-fluid footer-block">
                <div className="container">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default LandingPage;