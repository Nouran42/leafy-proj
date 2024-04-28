package com.example.graduationProject.Service;


import com.example.graduationProject.Entity.Shipping;

import java.util.Optional;

public interface ShippingService {

    Optional<Shipping> getShippingById(int shippingId);

}
