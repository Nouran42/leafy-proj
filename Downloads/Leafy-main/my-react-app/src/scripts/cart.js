let cart = [];

export const addToCart = async (product, quantity = 1) => {
    const existingItem = cart.find(item => item.productId === product.productId);

    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }
};

export const removeFromCart = (productId) => {
    cart = cart.filter(item => item.productId !== productId); 
};

export const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
};
export const getCartItems = () => {
    return cart;
};

export const clearCart = () => {
    cart = [];
};
