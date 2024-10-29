import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style2.css'; 
import '../css/style3.css'; 
import Footer from '../components/Footer';
import Header from '../components/Header';
import indoorPlants from '../../public/images/indoor-plants-studio (2).jpg';
import potsPlants from '../../public/images/potsplants.jpg';
import oilForPlant from '../../public/images/oilforplant.jpg';
import indoorPlants1 from '../../public/images/indoor-plants-studio (1).jpg';
import indoor from '../../public/images/indoor.jpg';
import petFriendly from '../../public/images/petfriendly.jpg';
import { getCartCount } from '../scripts/cart';





const Guides = () => {
    const [cartCounter, setCartCounter] = useState(getCartCount());
    return (
        <>
        <Header cartCount={cartCounter}/>
        <h1 className="guides-header">YOUR GUIDES</h1>
            <div className="container guide-collage">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4 guidediv">
                        <Link to="/HowToTakeCare" className="guide-link">
                            <img src={indoorPlants} className="img-fluid collage-img" alt="Guide 1" />
                            <p className="guide-page-title">HOW TO TAKE CARE OF YOUR PLANTS</p>
                        </Link>
                        <br />
                        <Link to="/BestSoil" className="guide-link">
                            <img src={potsPlants} className="img-fluid collage-img" alt="Guide 2" />
                            <p className="guide-page-title">YOUR GUIDE ON SOILS</p>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4 guidediv">
                        <Link to="/BestOils" className="guide-link">
                            <img src={oilForPlant} className="img-fluid collage-img" alt="Guide 3" />
                            <p className="guide-page-title">BEST ESSENTIAL OILS FOR YOUR PLANTS</p>
                        </Link>
                        <Link to="/BestPots" className="guide-link">
                            <img src={indoorPlants1} className="img-fluid collage-img" alt="Guide 4" />
                            <p className="guide-page-title">YOUR GUIDE FOR CHOOSING THE BEST POTS</p>
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-4 guidediv">
                        <Link to="/BestShadedArea" className="guide-link">
                            <img src={indoor} className="img-fluid collage-img" alt="Guide 5" />
                            <p className="guide-page-title">YOUR GUIDE FOR CHOOSING THE BEST SHADED AREA PLANTS</p>
                        </Link>
                        <Link to="/PetFriendly" className="guide-link">
                            <img src={petFriendly} className="img-fluid collage-img" alt="Guide 6" />
                            <p className="guide-page-title">WHAT IS THE BEST PET FRIENDLY PLANTS</p>
                        </Link>
                    </div>
                </div>
            </div>

            <Footer/>
            
        </>
      );
}
 
export default Guides;