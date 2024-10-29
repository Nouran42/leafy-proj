import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style2.css'; 
import '../css/style3.css'; 
import backImage from '../../public/images/back.png'; 
import indoorImage from '../../public/images/indoor.jpg'; 
import Footer from '../components/Footer';
import Header from '../components/Header';
import { getCartCount } from '../scripts/cart';

const BestShadedArea = () => {
  const [cartCounter, setCartCounter] = useState(getCartCount());
  return (
    <>
    <Header cartCount={cartCounter} />
    <div className="container3">
      <div className="guide-column">
        <span className="backGuides">
          <Link to="/guides">
            <img src={backImage} alt="Back" />
          </Link>
        </span>
        <h1 className="guides-header">SHADED AREA PLANTS GUIDE</h1>
        <div>
          <img src={indoorImage} className="img-fluid guide-img" alt="Guide 1" />
          <p className="guide-page-title">BEST SHADED AREA PLANTS</p>
          <p className="guide-article">
            Plant buying inevitably involves pot shopping, but it doesn't have to be difficult! We'll explain the differences in pot sizes and how choosing the correct size might impact your plant's health in this tutorial.
          </p>
          <p className="guide-article">
            That you have a new plant, congrats! - and you're debating what size pot to acquire and whether to replace the old one.
          </p>
          <p className="guide-article">
            Repotting your plant in a new pot is usually unnecessary because it should already be in the proper soil and pot size. Repotting is only necessary when the plant outgrows its pot, which should happen every six months to a year.
          </p>
          <h3 className="guidesh3">Aloe Vera</h3>
          <p className="guide-article">
            If you received your plant in a broken or a poor quality pot, it’s better to repot it in a new pot to avoid any damages that can happen to the roots. Also, a broken pot can keep spilling soil which will mess up your place.
          </p>
          <h3 className="guidesh3">Asian Bay Berry</h3>
          <p className="guide-article">
            When your plant is not growing at its usual pace or stopped growing altogether, then it is time to re-pot in a bigger pot and fresh soil! Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique tenetur molestiae totam voluptatem. Similique, aliquam omnis molestias architecto reprehenderit ea vel ad quidem atque praesentium tenetur maiores optio aut in. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus qui, corrupti vitae at quam repudiandae provident consectetur adipisci rerum officia reprehenderit laudantium? Ducimus officia corrupti non eaque reprehenderit laudantium dolor. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora nemo asperiores voluptatem quidem voluptas earum soluta reprehenderit, eum aspernatur vitae magni dolore! Necessitatibus rerum dolorem accusamus voluptatibus et veritatis fuga!
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default BestShadedArea;
