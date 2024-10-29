import axios from 'axios';

export const filterProduct = async (value, title, applyFilter, setMainTitle) => {
    try {
        setMainTitle(title.toUpperCase());
        
        let response;
        if (value === 'allproducts') {
            response = await axios.get('http://localhost:8080/products/all'); 
        } else {
            response = await axios.get(`http://localhost:8080/products/all?category=${value}`); 
        }
        
        console.log('Response from backend:', response.data); // Log the response from the backend
        applyFilter(response.data);
    } catch (error) {
        console.error('Error fetching filtered products:', error);
        throw error;
    }
};
