package com.example.graduationProject.Controller;


import com.example.graduationProject.Entity.Cart;
import com.example.graduationProject.Service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class CartController {
    @Autowired
    CartService cartService;

    @PostMapping("/create/cart")
    public Cart addNewCart(@RequestBody  Cart cart){
        return cartService.addNewCart(cart);
    }

    @GetMapping("/get/cart/{cartId}")
    public Optional<Cart> getCartById(@PathVariable ("cartId") int cartId){
        return cartService.getCartById(cartId);
    }
}
