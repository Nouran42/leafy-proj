import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getCartItems, getCartCount, clearCart } from '../scripts/cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/style3.css'
import axios from 'axios';
import setAuthToken from '../services/myForm';
//import instance from '../components/axiosInstance';

const Checkout = () => {
  
    
    
    const navigate = useNavigate();
    const cartItems = getCartItems();

   
    useEffect(() => {
        const token = localStorage.getItem('token'); // Retrieve token from localStorage
        if (token) {
            setAuthToken(token); // Set Axios headers with the retrieved token
        }
    }, []);


    const [paymentMethod, setPaymentMethod] = useState('creditCard');
    const[city,setCity]=useState('Cairo');
    const [formData, setFormData] = useState({
        city: 'Cairo', // Default city
        shippingSameAsBilling: false, // State to track if shipping address is same as billing
    });

    
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                [name]: checked,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
        if (name === 'city') setFormData({ ...formData, city: value }); // Update city in formData
    };

    const handleCheckout = async (event) => {
        event.preventDefault();

        const products = cartItems.map(item => ({
            productId: item.productId,
        }));

        const orderData = {
            orderPaymentType: 
            { 
                paymentId: paymentMethod === 'creditCard' ? 1 : 2 
            },
            orderShipping:
             { 
                shippingID: formData.city === 'Cairo' ? 2 : 3
             },
            products: products
        };
       

        try {
            
            const response = await axios.post('http://localhost:8080/orders/create', orderData );
            console.log('Order placed successfully:', response.data); 
            navigate(`/confirmation/${response.data.orderId}`); 
        } catch (error) {
            console.error('Error while placing order:', error);
        }
    };


    
    const calculateTotal = () => {
        let subtotal = 0;
        cartItems.forEach((item) => {
            subtotal += item.price * item.quantity;
        });
        let shippingFees = formData.city === 'Cairo' ? 60 : 80;
        const total = parseFloat(subtotal) + shippingFees;
        return total.toFixed(2);
    };

   

    return (
        <>
            <Header  cartCount={getCartCount()}/>
            <div className="container checkout-container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="container checkcontainer fixed-width-container">
                            <form onSubmit={handleCheckout}>
                                <div className="row">
                                    <div className="col-md-6">
                                       
                                         <h3 className="mb-3 mt-3">City</h3>
                                        <div className="accordion acc" id="cityAccordion">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingCity">
                                                    <button
                                                        className="accordion-button"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseCity"
                                                        aria-expanded="true"
                                                        aria-controls="collapseCity"
                                                    >
                                                        Choose City
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapseCity"
                                                    className="accordion-collapse collapse show"
                                                    aria-labelledby="headingCity"
                                                    data-bs-parent="#cityAccordion"
                                                >
                                                    <div className="accordion-body">
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="city"
                                                                id="cityCairo"
                                                                value="Cairo"
                                                                checked={formData.city === 'Cairo'}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label className="form-check-label" htmlFor="cityCairo">
                                                                Cairo
                                                            </label>
                                                        </div>
                                                        <div className="form-check">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="city"
                                                                id="cityAlexandria"
                                                                value="Alexandria"
                                                                checked={formData.city === 'Alexandria'}
                                                                onChange={handleInputChange}
                                                            />
                                                            <label className="form-check-label" htmlFor="cityAlexandria">
                                                                Alexandria
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className="mb-3 mt-3">Payment</h3>
                                        <div className="accordion acc" id="paymentAccordion">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingCreditCard">
                                                    <button
                                                        className={`accordion-button ${paymentMethod === 'creditCard' ? '' : 'collapsed'}`}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseCreditCard"
                                                        aria-expanded={paymentMethod === 'creditCard' ? 'true' : 'false'}
                                                        aria-controls="collapseCreditCard"
                                                        onClick={() => setPaymentMethod('creditCard')}
                                                    >
                                                        Credit Card
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapseCreditCard"
                                                    className={`accordion-collapse collapse ${paymentMethod === 'creditCard' ? 'show' : ''}`}
                                                    aria-labelledby="headingCreditCard"
                                                    data-bs-parent="#paymentAccordion"
                                                >
                                                    <div className="accordion-body">
                                                        <label htmlFor="cname" className="form-label">Name on Card</label>
                                                        <input type="text" id="cname" name="cardname" className="form-control" placeholder="John More Doe" required={paymentMethod === 'creditCard'} />
                                                        <label htmlFor="ccnum" className="form-label">Credit card number</label>
                                                        <input type="text" id="ccnum" name="cardnumber" className="form-control" placeholder="1111-2222-3333-4444" required={paymentMethod === 'creditCard'} />
                                                        <div className="row">
                                                            <div className="col">
                                                                <label htmlFor="expmonth" className="form-label">Exp Month</label>
                                                                <input type="text" id="expmonth" name="expmonth" className="form-control" placeholder="September" required={paymentMethod === 'creditCard'} />
                                                            </div>
                                                            <div className="col">
                                                                <label htmlFor="expyear" className="form-label">Exp Year</label>
                                                                <input type="text" id="expyear" name="expyear" className="form-control" placeholder="2018" required={paymentMethod === 'creditCard'} />
                                                            </div>
                                                        </div>
                                                        <label htmlFor="cvv" className="form-label">CVV</label>
                                                        <input type="text" id="cvv" name="cvv" className="form-control" placeholder="352" required={paymentMethod === 'creditCard'} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="headingCOD">
                                                    <button
                                                        className={`accordion-button ${paymentMethod === 'cod' ? '' : 'collapsed'}`}
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#collapseCOD"
                                                        aria-expanded={paymentMethod === 'cod' ? 'true' : 'false'}
                                                        aria-controls="collapseCOD"
                                                        onClick={() => setPaymentMethod('cod')}
                                                    >
                                                        Cash on Delivery
                                                    </button>
                                                </h2>
                                                <div
                                                    id="collapseCOD"
                                                    className={`accordion-collapse collapse ${paymentMethod === 'cod' ? 'show' : ''}`}
                                                    aria-labelledby="headingCOD"
                                                    data-bs-parent="#paymentAccordion"
                                                >
                                                    <div className="accordion-body">
                                                        <p>No additional information required.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <label className="form-check same-address-container">
                                    <input type="checkbox" name="sameadr" className="form-check-input" />
                                    <span className="form-check-label">Shipping address same as billing</span>
                                </label>
                                <br />
                                <button type="submit" className="btn checkbtn mt-3">Continue to checkout</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="container checkcontainer fixed-width-container">
                            <div className="col">
                                <br />
                                <h4>Cart</h4>
                                <br />
                                {cartItems.map((item, index) => (
                                    <div key={index} className="cart-itemzzz">
                                        <div className="row">
                                            <div className="col-3">
                                                <img
                                                    src={`data:image/jpeg;base64,${item.image}`}
                                                    alt={item.productName}
                                                    className="img-fluid"
                                                    style={{ maxHeight: "100px" }}
                                                />
                                            </div>
                                            <div className="col-9">
                                                <p>
                                                    <strong>{item.productName} x {item.quantity}</strong>
                                                </p>
                                                <p>
                                                    <span className="price">EGP {(item.price * item.quantity).toFixed(2)}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <br />
                                    </div>
                                ))}
                                <hr />
                                <p className="totalzzz">Total <span className="price"><b>EGP {calculateTotal()}</b></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};


export default Checkout;