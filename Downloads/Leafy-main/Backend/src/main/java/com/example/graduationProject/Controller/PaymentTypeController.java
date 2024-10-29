package com.example.graduationProject.Controller;

import com.example.graduationProject.Entity.Payment;
import com.example.graduationProject.Entity.PaymentType;
import com.example.graduationProject.Service.PaymentTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class PaymentTypeController {
    @Autowired
    PaymentTypeService paymentTypeService;

    @PostMapping("/payType/create")
    public PaymentType addNewPaymentType(@RequestBody PaymentType paymentType){
        return paymentTypeService.addNewPaymentType(paymentType);
    }
    @GetMapping("/get/payType/{payId}")
    public Optional<PaymentType> getPaymentTypeById(@PathVariable("payId") int payId){
        return paymentTypeService.getPaymentTypeById(payId);
    }
}
