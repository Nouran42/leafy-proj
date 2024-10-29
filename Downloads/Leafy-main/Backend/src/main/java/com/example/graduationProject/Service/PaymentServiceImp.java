package com.example.graduationProject.Service;

import com.example.graduationProject.Entity.Payment;
import com.example.graduationProject.Repository.PaymentRepository;
import com.example.graduationProject.Repository.PaymentTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;



@Service
public class PaymentServiceImp implements PaymentService {

    @Autowired
    PaymentRepository paymentRepository;
    @Autowired
    PaymentTypeRepository paymentTypeRepository;

    @Override
    public Payment addNewPayment(Payment payment) {
        payment.setPay_type(paymentTypeRepository.findById(payment.getPay_type().getPaymentId()).orElseThrow());
        return paymentRepository.save(payment);
    }

    @Override
    public List<Payment> fetchAllPaymentMethod() {
        return paymentRepository.findAll();
    }

    @Override
    public Optional<Payment> getPaymentById(int payId) {
        return paymentRepository.findById(payId);
    }
}
