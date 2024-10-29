package com.example.graduationProject.Controller;

import com.example.graduationProject.Entity.Order;
import com.example.graduationProject.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OrderController {
    @Autowired
    private OrderService orderService;

    @PostMapping("/orders/create")
    public Order addNewOrder(@RequestBody Order order){
        return orderService.addNewOrder(order);
    }
    @GetMapping("/orders/all")
    public List<Order> getAllOrder(){
        return orderService.fetchAllOrder();
    }
    @GetMapping("/get/orders/{orderId}")
    public Order getOrderById(@PathVariable("orderId") int orderId){
        return orderService.getOrderById(orderId);
    }
    @DeleteMapping("/delete/orders/{orderId}")
    public boolean deleteOrder(@PathVariable ("orderId") int orderId){
        return orderService.deleteOrder(orderId);
    }
}
