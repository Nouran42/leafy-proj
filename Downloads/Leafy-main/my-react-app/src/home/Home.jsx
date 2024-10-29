import React,{ useState , useEffect} from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import '../css/style2.css';
import '../css/style3.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import App from '../App';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { addToCart, getCartCount ,getCartItems} from '../scripts/cart';
import '../scripts/animate'
import img1 from '../../public/images/blank-picture-frame-by-houseplant-corner-parquet-floor.jpg'
import img2 from '../../public/images/Untitled.png'
import img3 from '../../public/images/eggplant.png'
import img4 from '../../public/images/pots.png'
import img5 from '../../public/images/shadedPlant.png'
import img6 from '../../public/images/tools.png'
import img7 from '../../public/images/resemary.png'




const Home = () => {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const updateCartCount = async () => {
            const count = await getCartCount();
            setCartCount(count);
        };

        updateCartCount();
        const faders = document.querySelectorAll(".fade-in");
        const sliders = document.querySelectorAll(".slide-in");

        const appearOptions = {
            threshold: 0,
            rootMargin: "0px 0px -200px 0px"
        };

        const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
            entries.forEach(entry => {
                if (!entry.isIntersecting) {
                    return;
                } else {
                    entry.target.classList.add('appear');
                    appearOnScroll.unobserve(entry.target);
                }
            });
        }, appearOptions);

        faders.forEach(fader => {
            appearOnScroll.observe(fader);
        });

        sliders.forEach(slider => {
            appearOnScroll.observe(slider);
        });
    }, []); 


    return (  
        <>
        <Header cartCount={cartCount}/>

        <style>
                {`
                    .image-with-text {
                        position: relative;
                        display: inline-block;
                        width: 100%;
                    }

                    .image-with-text img {
                        width: 100%;
                        height: auto;
                        display: block;
                    }

                    .text-overlay {
                        position: absolute;
                        top: 55%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                        /* background-color: rgba(255, 255, 255, 0.8);
                        padding: 10px;
                        border-radius: 5px; */
                        text-align: center;
                        color: #32533b;
                        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                    }

                    .text-overlay h1 {
                        font-size: 4vw; 
                        color: #32533b;
                        font-weight: 700;
                        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                    }

                    .titles-text {
                        max-width: 100%;
                    }

                    .card {
                        border: none !important;
                    }

                    @media (max-width: 768px) {
                        * {
                            overflow-x: hidden;
                        }
                        .text-overlay h1 {
                            font-size: 3vw; 
                        }
                        .index-product-row {
                            display: flex;
                            flex-wrap: wrap;
                            justify-content: space-between;
                        }
                        .my-col {
                            flex: 0 0 calc(50% - 10px); /* Adjust the width as needed */
                            max-width: calc(50% - 10px);
                            margin: 5px;
                        }
                        .index-text {
                            font-size: 0.9em;
                        }
                        .index-subtitle {
                            font-size: 1.2em;
                            font-weight: 300;
                        }
                        .titles {
                            margin-left: 0;
                        }
                        .titles-text {
                            margin-left: -15px;
                            font-size: 1.2em;
                        }
                    }
                `}
            </style>
        
        <div className="image-with-text intro">
                <img src={img1} alt="Your Image" />
                <div className="text-overlay">
                    <h1>Elevate <br /><br /> Your <br /><br /> Space</h1>
                </div>
            </div>

            <div className="row gx-5 index-product-row">
                <div className="col-md-2 my-col">
                    <div className="card fade-in">
                        <div className="card-body text-center">
                            <button className="homebtn">
                                <img src={img2} alt="" className="img-fluid middleimg" />
                                <h3 className="card-subtitle mb-1 mt-3 text-body-secondary index-subtitle">Fruit <br /> Seeds</h3>
                                <p className="card-text index-text" style={{ color: '#8c8c8c' }}>Explore premium fruit seeds</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 my-col">
                    <div className="card fade-in">
                        <div className="card-body text-center">
                            <button className="homebtn">
                            <img src={img3} alt="" className="img-fluid middleimg" />
                                <h3 className="card-subtitle mb-1 mt-3 text-body-secondary index-subtitle">Vegetable Seeds</h3>
                                <p className="card-text index-text" style={{ color: '#8c8c8c' }}>Explore premium vegetable seeds</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 my-col">
                    <div className="card fade-in">
                        <div className="card-body text-center">
                            <button className="homebtn">
                                <img src={img4} alt="" className="img-fluid middleimg" />
                                <h3 className="card-subtitle mb-1 mt-3 text-body-secondary index-subtitle">Pots & Planters</h3>
                                <p className="card-text index-text" style={{ color: '#8c8c8c' }}>Explore our unique pots & planters</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 my-col">
                    <div className="card fade-in">
                        <div className="card-body text-center">
                            <button className="homebtn">
                                <img src={img5} alt="" className="img-fluid middleimg" />
                                <h3 className="card-subtitle mb-1 mt-3 text-body-secondary index-subtitle">Shaded<br />Plants</h3>
                                <p className="card-text index-text" style={{ color: '#8c8c8c' }}>Explore Shaded area Plants</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 my-col">
                    <div className="card fade-in">
                        <div className="card-body text-center">
                            <button className="homebtn">
                                <img src={img6} alt="" className="img-fluid middleimg" />
                                <h3 className="card-subtitle mb-1 mt-3 text-body-secondary index-subtitle">Gardening<br />Tools</h3>
                                <p className="card-text index-text" style={{ color: '#8c8c8c' }}>Explore our Gardening Tools</p>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-md-2 my-col">
                    <div className="card fade-in">
                        <div className="card-body text-center">
                            <button className="homebtn">
                                <img src={img7} alt="" className="img-fluid middleimg" />
                                <h3 className="card-subtitle mb-1 mt-3 text-body-secondary index-subtitle">Herbs</h3>
                                <p className="card-text index-text" style={{ color: '#8c8c8c' }}>Explore our premium Herbs</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row Guides">
                <div className="row m-4 titles">
                    <h3 className="titles-text">YOUR GUIDE</h3>
                </div>

                <div className="col-md-4 col-sm-12 mb-4 mt-4">
                    <div className="card fade-in">
                        <div className="card-body">
                            <Link to='/HowToTakeCare' className="guidelink">
                                <img src="images/indoor-plants-studio (2).jpg" alt="" className="img-fluid guideimg" />
                                <div className="text-block">
                                    <p>HOW TO TAKE CARE OF YOUR PLANTS</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12 mb-4 mt-4">
                    <div className="card fade-in">
                        <div className="card-body">
                            <Link to='/BestPots' className="guidelink">
                                <img src="images/indoor-plants-studio (1).jpg" alt="" className="img-fluid" />
                                <div className="text-block">
                                    <p>YOUR GUIDE ABOUT CHOOSING <br /> THE BEST POTS </p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12 mb-4 mt-4">
                    <div className="card fade-in">
                        <div className="card-body">
                            <Link to='/BestShadedArea' className="guidelink">
                                <img src="images/indoor.jpg" alt="" className="img-fluid" />
                                <div className="text-block">
                                    <p>YOUR GUIDE FOR CHOOSING THE <br /> BEST SHADED AREA PLANTS</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            
                
               

                <div className="row detect">
                    <div className="col-md-6 col-sm-12 detectp slide-in from-left mt-5">
                        <h2>Discover Our Plant Disease Identification Tool!</h2>
                        <div className="button-wrapper">
                            <Link to='/detect' className="detectbutton">Explore</Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 slide-in from-right">
                        <img src="images/plantIdentification.jpg" alt="" className="plantpic" />
                    </div>
                </div>

                <div className="image-with-text before-footer">
                    <img src="images/green-monstera-leaves-nature.jpg" alt="Your Image" />
                    <div className="text-overlay2 fade-in">
                        <h1>Leafy</h1>
                        <h3>We Provide our customer with premium plant collection, tools for gardening, and tool for detecting their plants!</h3>
                        <p>"Green Innovation Powered By Intelligence Growth"</p>
                    </div>
                </div>
            
            <Footer/>
        </>
    );
};

export default Home;