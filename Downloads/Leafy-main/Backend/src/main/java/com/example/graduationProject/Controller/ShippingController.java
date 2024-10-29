package com.example.graduationProject.Controller;


import com.example.graduationProject.Entity.Cart;
import com.example.graduationProject.Entity.Shipping;
import com.example.graduationProject.Service.ShippingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class ShippingController {
    @Autowired
    ShippingService shippingService;

    @PostMapping("/create/Shipping")
    public Shipping addNewShipping(@RequestBody Shipping shipping){
        return shippingService.addNewShipping(shipping);
    }


    @GetMapping("/get/Shipping/{shippingId}")
    public Optional<Shipping> getShippingById(@PathVariable("shippingId") int shippingId) {
        return shippingService.getShippingById(shippingId);
    }
}
