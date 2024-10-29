import '../css/style2.css';
import React,{ useState ,useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; 
import '../css/style3.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from '../App';
import Footer from './Footer';
import Header from './Header';
import Filter from './Filter';
import products from '../data/products';
import ProductCard from './productCard';
import {filterProduct} from '../scripts/FilterProducts'
import { getCartItems, getCartCount , removeFromCart } from '../scripts/cart';



const Cart = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState(getCartItems());
    const [cartCounter, setCartCounter] = useState(getCartCount());

    useEffect(() => {
        setCartCounter(getCartCount());
        setCart(getCartItems());
    }, []);


    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) return;

        const updatedCart = cart.map(item => {
            if (item.productId === productId) { // Adjusted to productId
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setCart(updatedCart);
    };


    const removeItem = (productId) => {
        removeFromCart(productId); // Assuming removeFromCart takes productId
        setCart(getCartItems());
        setCartCounter(getCartCount());
    };

    const calculateSubtotal = () => {
        return cart.reduce((subtotal, item) => subtotal + (item.price * item.quantity), 0).toFixed(2);
    };

    const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        const shippingFees = 0;
        const total = parseFloat(subtotal) + shippingFees;
        return total.toFixed(2);
    };

    const continueShopping = () => {
        navigate('/shop');
    };
    const proceedToCheckout = () => {
        navigate('/checkout');
    };

    return (
        <>
            <Header cartCount={cartCounter} />
            <div className="cart-container container2">
                <h2 className="cart-header">Shopping Cart</h2>
                <div className="cart-itemsss">
                    {cart.length === 0 ? (
                        <>
                        <p style={{ textAlign: "center" }}>Your cart is empty.</p>
                        <div className="cart-buttons justify-content-center">
                        <button onClick={continueShopping} style={{textAlign:"center"}}>Continue shopping</button>
                       
                    </div>
                    </>
                    ) : (
                        <>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ITEM</th>
                                        <th>DESCRIPTION</th>
                                        <th>UNIT PRICE</th>
                                        <th>QUANTITY</th>
                                        <th>SUBTOTAL</th>
                                        <th>DELETE</th> 
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map(item => (
                                        <tr key={item.productId}className="cart-item">
                                            <td><img src={`data:image/jpeg;base64,${item.image}`} alt={item.productName} style={{ maxWidth: '100px' }} /></td>
                                            <td className="item-name">{item.productName}</td>
                                            <td className="item-price">EGP {item.price}</td>
                                            <td className='item-price'>{item.quantity}</td>
                                               
                                            <td className="subtotal">EGP {(item.price * item.quantity).toFixed(2)}</td>
                                            <td>
                                                <FontAwesomeIcon
                                                    icon={faTimes}
                                                    className="remove-icon"
                                                    onClick={() => removeItem(item.productId)}
                                                    style={{ cursor: 'pointer', color: 'red' }}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <div className="cart-totals">
                                <div className="row">
                                    <div className="col-6">Subtotal</div>
                                    <div className="col-6 text-end subtotal-value">EGP {calculateSubtotal()}</div>
                                </div>
                                <div className="row">
                                    <div className="col-6">Total</div>
                                    <div className="col-6 text-end total-value">EGP {calculateTotal()}</div>
                                </div>
                                <p>Shipping fees are calculated upon address selection.</p>
                            </div>

                            <div className="cart-buttons">
                                <button onClick={continueShopping}>Continue shopping</button>
                                <button onClick={proceedToCheckout}>Proceed to checkout</button>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Cart;