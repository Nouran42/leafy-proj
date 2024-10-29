package com.example.graduationProject.Service;

import com.example.graduationProject.Entity.Payment;
import com.example.graduationProject.Entity.User;

import java.util.List;
import java.util.Optional;

public interface PaymentService  {


    Payment addNewPayment(Payment payment);
    List<Payment> fetchAllPaymentMethod();

    Optional<Payment> getPaymentById(int payId);


}
