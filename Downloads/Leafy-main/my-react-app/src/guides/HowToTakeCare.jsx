import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style2.css'; // Ensure the correct path
import '../css/style3.css'; // Ensure the correct path
import backImage from '../../public/images/back.png'; // Ensure the correct path
import indoorPlantsImage from '../../public/images/indoor-plants-studio (2).jpg'; // Ensure the correct path
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getCartCount } from '../scripts/cart';

const HowToTakeCare = () => {
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
        <h1 className="guides-header">HOW TO TAKE CARE OF PLANTS</h1>
        <div>
          <img src={indoorPlantsImage} className="img-fluid guide-img" alt="Guide 1" />
          <p className="guide-page-title">HOW TO TAKE CARE OF YOUR PLANTS</p>
            <p className="guide-article">
              Taking care of your plants involves understanding their specific needs for water, light, and nutrients. Here are some essential tips for plant care:
            </p>
            <h3 className="guidesh3">Light and Watering Needs</h3>
            <p className="guide-article">
              Different plants require different amounts of light and water. Research the specific needs of your plants to ensure they receive the right amount of sunlight and moisture.
            </p>
            <h3 className="guidesh3">Choosing the Right Pot</h3>
            <p className="guide-article">
              Select pots that provide adequate drainage and are suitable for the size of your plants. Proper drainage prevents waterlogging, which can lead to root rot.
            </p>
            <h3 className="guidesh3">Fertilizing Schedule</h3>
            <p className="guide-article">
              Feed your plants with appropriate fertilizer based on their growth stage and type. Avoid over-fertilizing, as it can harm your plants.
            </p>
            <h3 className="guidesh3">Pest and Disease Management</h3>
            <p className="guide-article">
              Monitor your plants regularly for signs of pests or diseases. Use organic or chemical treatments as necessary to maintain plant health.
            </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default HowToTakeCare;
