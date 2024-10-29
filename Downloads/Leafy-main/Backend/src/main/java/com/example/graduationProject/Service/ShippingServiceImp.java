package com.example.graduationProject.Service;

import com.example.graduationProject.Entity.Shipping;
import com.example.graduationProject.Repository.ShippingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class ShippingServiceImp implements ShippingService{

    @Autowired
    private ShippingRepository shippingRepository;

    @Override
    public Shipping addNewShipping(Shipping shipping) {
        return shippingRepository.save(shipping);
    }

    @Override
    public Optional<Shipping> getShippingById(int shippingId) {
        return shippingRepository.findById(shippingId);
    }
}
