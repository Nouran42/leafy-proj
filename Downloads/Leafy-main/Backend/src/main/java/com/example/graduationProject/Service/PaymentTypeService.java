package com.example.graduationProject.Service;

import com.example.graduationProject.Entity.PaymentType;
import com.example.graduationProject.Entity.User;

import java.util.Optional;


public interface PaymentTypeService {
    PaymentType addNewPaymentType(PaymentType paymentType);

    Optional<PaymentType> getPaymentTypeById(int payTypeId);
}
