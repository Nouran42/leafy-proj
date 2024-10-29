package com.example.graduationProject.Controller;

import com.example.graduationProject.Entity.Payment;
import com.example.graduationProject.Service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
public class PaymentController {
    @Autowired
    PaymentService paymentService;

    @PostMapping("/pay/create")
    public Payment addNewPayment(@RequestBody Payment payment){
        return paymentService.addNewPayment(payment);
    }
    @GetMapping("/pay/all")
    public List<Payment> getAllPayment(){
        return paymentService.fetchAllPaymentMethod();
    }
    @GetMapping("/get/pay/{payId}")
    public Optional<Payment> getPaymentById(@PathVariable("payId") int payId){
        return paymentService.getPaymentById(payId);
    }
}
