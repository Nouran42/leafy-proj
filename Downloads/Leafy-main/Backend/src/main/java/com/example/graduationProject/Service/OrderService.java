package com.example.graduationProject.Service;

import com.example.graduationProject.Entity.Order;

import java.util.List;

public interface OrderService {
    Order addNewOrder(Order order);
    List<Order> fetchAllOrder();
    Order getOrderById(int orderId);
    boolean deleteOrder(int orderId);
}
