import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style2.css';
import '../css/style3.css'; 
import backImage from '../../public/images/back.png'; 
import potsPlantsImage from '../../public/images/potsplants.jpg'; 
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getCartCount } from '../scripts/cart';


const BestSoil = () => {
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
        <h1 className="guides-header">SOILS GUIDE</h1>
        <div>
          <img src={potsPlantsImage} className="img-fluid guide-img" alt="Guide 1" />
          <p className="guide-page-title">YOUR GUIDE ON SOILS</p>
          <h3 className="guidesh3">Potting Soil</h3>
            <p className="guide-article">
              Potting soil is a versatile option for container gardening. It's lightweight, well-draining, and enriched with nutrients essential for plant growth. Look for potting mixes specific to the types of plants you're growing, such as cacti/succulent mix or indoor plant mix.
            </p>
            <h3 className="guidesh3">Garden Soil</h3>
            <p className="guide-article">
              Garden soil is suitable for outdoor planting in beds or raised gardens. It should be rich in organic matter and have good drainage to support healthy root growth. Amend garden soil with compost to improve its fertility and structure.
            </p>
            <h3 className="guidesh3">Peat Moss</h3>
            <p className="guide-article">
              Peat moss is a lightweight and moisture-retentive soil amendment. It improves soil structure and helps retain nutrients, making it ideal for plants that prefer acidic conditions like azaleas and blueberries.
            </p>
            <h3 className="guidesh3">Compost</h3>
            <p className="guide-article">
              Compost is rich in organic matter and nutrients, making it beneficial for improving soil fertility and structure. Use compost as a top dressing or incorporate it into planting holes to enhance soil health and support plant growth.
            </p>
            <p className="guide-article">
              **Gardening Tips**: Regardless of the soil type, ensure it has good drainage to prevent waterlogging, which can lead to root rot. Monitor soil moisture levels regularly and adjust watering practices based on your plant's needs.
            </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default BestSoil;
