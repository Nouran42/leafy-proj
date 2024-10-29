package com.example.graduationProject.Service;

import com.example.graduationProject.Entity.Cart;
import com.example.graduationProject.Repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class CartServiceImp implements CartService {

    @Autowired
    private CartRepository cartRepository;

    @Override
    public Cart addNewCart(Cart cart) {
        return cartRepository.save(cart);
    }

    @Override
    public Optional<Cart> getCartById(int cartId) {
        return cartRepository.findById(cartId);
    }
}
