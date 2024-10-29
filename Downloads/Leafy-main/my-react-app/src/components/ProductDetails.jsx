import React,{ useState , useEffect} from 'react'
import '../css/style2.css'
import '../css/style3.css'
import { useParams , useNavigate} from 'react-router-dom';
import products from '../data/products';
import { addToCart, getCartCount, getCartItems } from '../scripts/cart';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import CustomModal from './customModal';
import axios from 'axios';
import setAuthToken from '../services/myForm';


const ProductDetails = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [cartCounter, setCartCounter] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [mainImage, setMainImage] = useState('');
    const navigate = useNavigate();
    

    useEffect(() => {
        setAuthToken();
        fetchProduct();
        setCartCounter(getCartCount());
        setCartItems(getCartItems());
    }, []);
  
    const fetchProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/get/products/${productId}`);
            setProduct(response.data);
            setMainImage(`data:image/jpeg;base64,${response.data.image}`);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };


    const handleAddToCart = async () => {
        try {
            const isProductInCart = cartItems.some(item => item.productId === product.productId);

            if (!isProductInCart) {
                await addToCart(product, quantity);
                const updatedCartItems = [...cartItems, { ...product, quantity }];
                setCartItems(updatedCartItems);
                setCartCounter(cartCounter + quantity);
            } else {
                const updatedCartItems = cartItems.map(item => {
                    if (item.productId === product.productId) {
                        return {
                            ...item,
                            quantity: item.quantity + quantity
                        };
                    }
                    return item;
                });
                setCartItems(updatedCartItems);
                setModalMessage('This product is already in your cart.');
                setShowModal(true);

            }
        } catch (error) {
            console.error('Error adding product to cart:', error);
            setModalMessage('Failed to add product to cart.');
            setShowModal(true);
        }
    };

    const handleCloseModal = () => setShowModal(false);

    const handleViewCart = () => {
        setShowModal(false);
        navigate('/cart'); // Navigate to cart page
    };

    const handleImageClick1 = () => {
        setMainImage(`data:image/jpeg;base64,${product.additionalImage}`);
    };

    const handleImageClick2 = () => {
        setMainImage(`data:image/jpeg;base64,${product.image}`);
    };


    const handleQuantityChange = (e) => {
        const newQuantity = parseInt(e.target.value);
        if (newQuantity > 0 && newQuantity <= product.quantity) {
            setQuantity(newQuantity);
        }
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Header cartCount={cartCounter}  />
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="product-images">
                            <img
                                src={mainImage}
                                alt={product.productName}
                                className="img-fluid main-image"
                                style={{ borderRadius: '10px', objectFit: 'cover' }}
                            />
                            <div className="additional-images row">
                                <img
                                    src={`data:image/jpeg;base64,${product.additionalImage}`}
                                    alt="Additional Image 1"
                                    className="addpic1"
                                    onClick={handleImageClick1}
                                />
                                 <img
                                    src={`data:image/jpeg;base64,${product.image}`}
                                    alt="Additional Image 1"
                                    className="addpic2"
                                    onClick={handleImageClick2}
                                />
                                {/* Add more additional images if needed */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <h1 className='product-card-title'>{product.productName.toUpperCase()}</h1>
                        <p className='product-card-desc'>{product.productDesc}</p>
                        <p><strong>Category:</strong>{product.category}</p>
                        <p ><strong>Price: </strong>EGP {product.price}</p>
                        <div className="form-group">
                            <label htmlFor="quantity">Quantity:</label>
                            <input
                                type="number"
                                id="quantity"
                                className="form-control"
                                value={quantity}
                                onChange={handleQuantityChange}
                                min="1"
                                max={product.quantity}
                            />
                        </div>
                        <button
                            className="btn  mt-5"
                            style={{ backgroundColor: 'darkGreen', color: 'white' }}
                            onClick={handleAddToCart}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
            <CustomModal
                show={showModal}
                handleClose={handleCloseModal}
               
                message={modalMessage}
                onConfirm={handleViewCart}
            />
        </>
    );
};

export default ProductDetails;