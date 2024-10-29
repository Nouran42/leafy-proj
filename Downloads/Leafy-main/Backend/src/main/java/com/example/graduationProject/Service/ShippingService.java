package com.example.graduationProject.Service;


import com.example.graduationProject.Entity.Shipping;

import java.util.Optional;

public interface ShippingService {

    Shipping addNewShipping(Shipping shipping);

    Optional<Shipping> getShippingById(int shippingId);

}
