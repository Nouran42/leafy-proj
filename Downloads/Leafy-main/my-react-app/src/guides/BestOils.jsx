import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style2.css'; 
import '../css/style3.css'; 
import Footer from '../components/Footer';
import Header from '../components/Header';
import backImage from '../../public/images/back.png';
import oilForPlantImage from '../../public/images/oilforplant.jpg';
import { getCartCount } from '../scripts/cart';

const BestOils = () => {
    const [cartCounter, setCartCounter] = useState(getCartCount());
    return (<>
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
                        <img src={oilForPlantImage} className="img-fluid guide-img" alt="Guide 1" />
                        <p className="guide-page-title">BEST ESSENTIAL OILS</p>
                        <p className="guide-article">
                        Using  essential oils can help maintain healthy plants naturally, reducing the need for synthetic pesticides and promoting sustainable gardening practices. Remember to always conduct a patch test on a small area of the plant before widespread application to ensure compatibility and effectiveness.                        </p>
                        <p className="guide-article">
                        Dilution: Always dilute essential oils properly before applying them to plants to avoid any potential harm or burning of foliage.

                        Application: Apply essential oils using a spray bottle diluted with water. Ensure thorough coverage on both sides of leaves and stems.

                        Frequency: Apply essential oils preventively or as soon as symptoms of pests or diseases appear. Repeat application as needed, following recommended dilution ratios.                        </p>
                        <p className="guide-article">
                            Repotting your plant in a new pot is usually unnecessary because it should already be in the proper soil and pot size. Repotting is only necessary when the plant outgrows its pot, which should happen every six months to a year.
                        </p>
                        <h3 className="guidesh3">Neem Oil</h3>
                        <p className="guide-article">
                        Neem oil is derived from the seeds of the neem tree (Azadirachta indica), native to the Indian subcontinent. It is known for its potent insecticidal properties and is commonly used in organic gardening to control pests like aphids, spider mites, and whiteflies. Neem oil also has antifungal properties, making it effective against fungal diseases such as powdery mildew.                        </p>
                        <h3 className="guidesh3">Carrot Oil</h3>
                        <p className="guide-article">
                        Carrot seed oil (Daucus carota) is rich in antioxidants and vitamins, making it beneficial for promoting plant growth and combating environmental stressors. It helps improve soil quality and supports healthy root development, which is crucial for overall plant vigor and resilience.                        </p>
                        <h3 className="guidesh3">Jojoba Oil</h3>
                        <p className="guide-article">
                        Jojoba oil (Simmondsia chinensis) is a natural plant oil that closely resembles human sebum and is highly beneficial for plant health. It acts as a natural fungicide and helps prevent fungal infections in plants. Jojoba oil also serves as an effective soil conditioner, enhancing nutrient absorption and promoting healthy microbial activity in the soil.                        </p>
                    </div>
                </div>
            </div>
            <Footer />
    
    </>  );
}
 
export default BestOils;