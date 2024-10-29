import React,{ useState , useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../css/style2.css';
import '../css/style3.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import App from '../App';
import Footer from './Footer';
import Header from './Header';
import Filter from './Filter';
import products from '../data/products';
import ProductCard from './productCard';
import {filterProduct} from '../scripts/FilterProducts'
import { addToCart, getCartCount ,getCartItems} from '../scripts/cart';
import CustomModal from './customModal';
import axios from 'axios';
import Search from './Search';






const inlineStyles={
    filterList:{
        marginTop:"30px",
       
    }
}
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [mainTitle, setMainTitle] = useState('ALL PRODUCTS');
    const [cartCounter, setCartCounter] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [cartItems, setCartItems] = useState([]);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
  
  
    axios.defaults.baseURL='http://localhost:8080',
    



    useEffect(() => {
        fetchAllProducts();
        setCartCounter(getCartCount());
        setCartItems(getCartItems());
    }, []);

  
   
    const fetchAllProducts = async () => {
        try {
            const response = await axios.get('/products/all');
            setProducts(response.data);
            setFilteredProducts(response.data); 
        } catch (error) {
            console.error('Error fetching all products:', error);
        }
    };

    const handleAddToCart = async (product) => {
        try {
            const isProductInCart = cartItems.some(item => item.productId === product.productId);

            if (!isProductInCart) {
                await addToCart(product);
                const updatedCartItems = [...cartItems, { ...product, quantity: 1 }];
                setCartItems(updatedCartItems);
                setCartCounter(cartCounter + 1); // Update cart counter
                
            } else {
                const updatedCartItems = cartItems.map(item => {
                    if (item.productId === product.productId) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
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
        navigate('/cart');
    };
    const applyFilter = (products) => {
        setFilteredProducts(products);
    };
    
    const handleSearch = async (term) => { 
        setSearchTerm(term);
    
        try {
          const response = await axios.get(`/search?searchTerm=${term}`); // API call to search products
          setFilteredProducts(response.data);
          setMainTitle(`Search Results for "${term}"`);
        } catch (error) {
          console.error('Error searching products:', error);
        }
      };


    return (
        <>
           <Header 
                   cartCount={cartCounter}
                   onSearch={handleSearch}
                  
            />
            <div className={'container mt-5'} style={inlineStyles.filterList}>
                <div className='row'>
                    <Filter applyFilter={applyFilter} setMainTitle={setMainTitle}/>
                    <div className='col-md-8 listings'>
                        <h2 className='mb-5' id='main-title'>{mainTitle}</h2>
                       
                        <div className="row productcard g-5" id='products'>
                        {Array.isArray(filteredProducts) &&
                filteredProducts.map((product) => (
                  <ProductCard
                    key={product.productId}
                    product={product}
                    addToCart={() => handleAddToCart(product)}
                  />
                            ))}
                        </div>
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

export default Shop;