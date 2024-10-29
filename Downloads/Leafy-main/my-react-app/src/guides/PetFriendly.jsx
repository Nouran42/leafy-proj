import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style2.css'; 
import '../css/style3.css';
import backImage from '../../public/images/back.png';
import petFriendlyImage from '../../public/images/petfriendly.jpg';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getCartCount } from '../scripts/cart';

const PetFriendly = () => {
  const [cartCounter, setCartCounter] = useState(getCartCount());
  return (
    <>
  <Header cartCount={cartCounter}/>
    <div className="container3">
      <div className="guide-column">
        <span className="backGuides">
          <Link to="/guides">
            <img src={backImage} alt="Back" />
          </Link>
        </span>
        <h1 className="guides-header">PET-FRIENDLY PLANTS GUIDE</h1>
        <div>
          <img src={petFriendlyImage} className="img-fluid guide-img" alt="Guide 1" />
          <p className="guide-page-title">BEST PET-FRIENDLY PLANTS</p>
            <p className="guide-article">
              Choosing plants that are safe for pets is crucial to prevent any harm to your furry friends. Here are some popular pet-friendly plants:
            </p>
            <h3 className="guidesh3">Aloe Vera</h3>
            <p className="guide-article">
              Aloe Vera is not only soothing for skin irritations but also safe for pets. Place it in a bright spot with indirect sunlight and water sparingly.
            </p>
            <h3 className="guidesh3">Spider Plant (Chlorophytum comosum)</h3>
            <p className="guide-article">
              Spider plants are safe for both cats and dogs. They are easy to care for and thrive in moderate light conditions.
            </p>
            <h3 className="guidesh3">Bamboo Palm (Chamaedorea seifrizii)</h3>
            <p className="guide-article">
              Bamboo Palm is a non-toxic plant that adds a tropical touch to your home. It prefers indirect light and regular watering.
            </p>
            <h3 className="guidesh3">Boston Fern (Nephrolepis exaltata)</h3>
            <p className="guide-article">
              Boston Ferns are safe for pets and thrive in humid environments. Keep the soil moist and provide indirect light for best growth.
            </p>
        </div>
      </div>
    </div>
    <Footer />

    </>
  );
};

export default PetFriendly;
