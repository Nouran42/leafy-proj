package com.example.graduationProject.Service;

import com.example.graduationProject.Entity.Cart;
import com.example.graduationProject.Entity.Shipping;

import java.util.Optional;

public interface CartService {

    Cart addNewCart(Cart cart);

    Optional<Cart> getCartById(int cartID);
}