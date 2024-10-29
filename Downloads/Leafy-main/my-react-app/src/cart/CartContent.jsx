// CartContext.jsx
import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Actions
const SET_CART = 'SET_CART';
const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const UPDATE_ITEM = 'UPDATE_ITEM';
const CLEAR_CART = 'CLEAR_CART';

// Initial state
const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
    cartCount: 0,
    
};

// Reducer
const cartReducer = (state, action) => {
    let newCart;
    switch (action.type) {
        case SET_CART:
            newCart = action.cart;
            break;
        case ADD_ITEM:
            newCart = [...state.cart, action.item];
            break;
        case REMOVE_ITEM:
            newCart = state.cart.filter(item => item.productId !== action.productId);
            break;
        case UPDATE_ITEM:
            newCart = state.cart.map(item => item.productId === action.item.productId ? action.item : item);
            break;
        case CLEAR_CART:
            newCart = [];
            break;
        default:
            return state;
    }
    return {
        cart: newCart,
        cartCount: newCart.reduce((total, item) => total + item.quantity, 0),
    };
};

// Context
const CartContext = createContext();

// Provider
export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cart));
    }, [state.cart]);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to use the cart context
export const useCart = () => {
    return useContext(CartContext);
};

// Cart actions
export const setCart = (cart) => ({ type: SET_CART, cart });
export const addItem = (item) => ({ type: ADD_ITEM, item });
export const removeItem = (productId) => ({ type: REMOVE_ITEM, productId });
export const updateItem = (item) => ({ type: UPDATE_ITEM, item });
export const clearCart = () => ({ type: CLEAR_CART });
