import React ,{useState}from "react";
import '../css/style2.css';
import '../css/style3.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../App';
import Products from './Products'
import axios from "axios";


const ProductCard = ({ product, addToCart }) => {
    const [isHovered, setIsHovered] = useState(false);
   

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleAddToCart = () => {
        addToCart(product); // Call addToCart function passed as prop
    };


    axios.defaults.baseURL = 'http://localhost:8080'; 
    axios.defaults.withCredentials = true; 

    //const imagePath = `/images/${product.image}`; // Update with your actual image path from API

    const imgC = `card-img-top `;

  

    return (
        <div className={'card prodcard'} style={{ borderRadius: '15px', gap: '30px', width: '19rem', height: '30rem',marginLeft:'1.5rem' }}>
             {product.quantity === 0 && ( // Conditionally render out of stock badge
                <span className="badge bg-danger position-absolute top-0 end-0 mt-2 me-2">Out of Stock</span>
            )}
            <Link to={product.quantity > 0 ? `/product/${product.productId}` : '#'}>
                 <div className="image-container">
                {isHovered ? (
                <img
                    src={`data:image/jpeg;base64,${product.additionalImage}`}
                    alt={product.productName}
                    className="img-hovered"
                    style={{
                        objectFit: 'cover',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
            ) : (
                <img
                    src={`data:image/jpeg;base64,${product.image}`}
                    alt={product.productName}
                    className="img-normal"
                    style={{
                        objectFit: 'cover',
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
            )}
                </div>
            </Link>
            <div className="card-body mt-4">
                <h5 className="card-title product-name">{product.productName.toUpperCase()}</h5>
                <p className="card-text">EGP {product.price}</p>
                {product.quantity > 0 ? ( // Conditionally render add to cart button
                    <button
                        className="btn btn-primary"
                        style={{ backgroundColor: 'darkGreen', color: 'white' }}
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                ) : (
                    <button
                        className="btn btn-primary"
                        style={{ backgroundColor: 'darkGray', color: 'white' }}
                        disabled
                    >
                        Out of Stock
                    </button>
                )}
            </div>
        </div>
    );
};

export default ProductCard;