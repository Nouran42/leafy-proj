import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./productCard";

const Products = ({ addToCart }) => {

    
    const [products, setProducts] = useState([]);
    axios.defaults.baseURL = 'http://localhost:8080'; 
    axios.defaults.withCredentials = true; 

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('/products/all');
                setProducts(response.data); 
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="products-container">
            {products.map(product => (
                <ProductCard key={product.productId} product={product} addToCart={addToCart} />
            ))}
        </div>
    );
};

export default Products;
