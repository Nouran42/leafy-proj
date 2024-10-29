import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import setAuthToken from '../services/myForm';
import '../css/style4.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { getCartCount, getCartItems } from '../scripts/cart';


const Confirmation = () => {
    const { orderId } = useParams();
    const [orderDetails, setOrderDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cartCounter, setCartCounter] = useState(0);

    const cartItems = getCartItems();


    useEffect(() => {
        const fetchOrderDetails = async () => {
            try {
                if (!orderId) {
                    console.error('orderId is undefined or null');
                    return;
                }

                const token = localStorage.getItem('token');
                if (token) {
                    setAuthToken(token);
                }

                const response = await axios.get(`http://localhost:8080/get/orders/${orderId}`);
                console.log(response.data);
                setOrderDetails(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching order details:', error);
                setLoading(false);
            }
        };

        fetchOrderDetails();
    }, [orderId]);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (!orderDetails) {
        return <div className="error">Failed to load order details.</div>;
    }

    return (
        <>
                <Header cartCount={cartCounter}/>
        <div className="confirmation-container container mt-5 p-4 shadow-lg rounded mb-5">
            <div className='col'> 
                <div className='row'>
            <h1 className="display-4"><b> Thank you, {orderDetails.orderUser.firstName}!</b></h1>
            <p className="lead">Your order #{orderDetails.orderId} is completed successfully.</p>
            <div className="alert alert-success" role="alert">
                <h2 className="alert-heading">Your Order is Confirmed</h2>
                <p>We have accepted your order, and we're getting it ready.</p>
            </div>
            </div>
            <div>
            <div className="customer-details my-4">
                <h4>Customer Details</h4>
                <p>Email: {orderDetails.orderUser.email}</p>
                <p>Billing address: {orderDetails.orderUser.address}</p>
                <p>Shipping address: {orderDetails.orderShipping.city}</p>
            </div>
            </div>
            <div className='row'>
            <div className="order-details my-4">
                <h4>Order Details</h4>
                {orderDetails.products.map((product, index) => (
                    <div key={index} className="product-detail mb-3">
                        <p><img src={`data:image/jpeg;base64,${product.image}`} alt={product.productName} style={{width:'80px', height:'80px'}}/>  <strong>{product.productName}</strong></p>
                        
                    </div>
                ))}
                </div>
                <div className='row'>
                <p>Subtotal: EGP {orderDetails.total_price}</p>
                <p>Shipping: EGP {orderDetails.orderShipping.price}</p>
                <p>Total: EGP {orderDetails.total_price + orderDetails.orderShipping.price}</p>
            </div>
            </div>
            </div>
        </div>
        <Footer/>
        </>

    );
};

export default Confirmation;
