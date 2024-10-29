package com.example.graduationProject.Service;

import com.example.graduationProject.Entity.PaymentType;
import com.example.graduationProject.Repository.PaymentTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PaymentTypeServiceImp implements PaymentTypeService{
    @Autowired
    PaymentTypeRepository paymentTypeRepository;


    @Override
    public PaymentType addNewPaymentType(PaymentType paymentType) {
        return paymentTypeRepository.save(paymentType);
    }

    @Override
    public Optional<PaymentType> getPaymentTypeById(int payTypeId) {
        return paymentTypeRepository.findById(payTypeId);
    }
}
