package com.example.graduationProject.Service;

import com.example.graduationProject.Entity.Order;
import com.example.graduationProject.Entity.Product;
import com.example.graduationProject.Entity.User;
import com.example.graduationProject.Repository.*;
import com.example.graduationProject.security.JwtUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class OrderServiceImp implements OrderService{
    @Autowired
    OrderRepository orderRepository;
    @Autowired
    CartRepository cartRepository;
    @Autowired
    JwtUtils jwtUtils;
    @Autowired
    PaymentTypeRepository paymentTypeRepository;
    @Autowired
    ShippingRepository shippingRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    ProductRepository productRepository;
    @Autowired
    ModelMapper mapper;


    private float calculateTotalPrice(Order order) {
        float totalPrice = 0f;
        for (Product product : order.getProducts()) {
            totalPrice += (float) product.getPrice();
        }
        if (order.getOrderShipping() != null) {
            totalPrice += order.getOrderShipping().getPrice();
        }
        return totalPrice;
    }


    private void updateProductQuantity(Order order) {
        for (Product product : order.getProducts()) {
            Product fullProduct = productRepository.findById(product.getProductId()).orElseThrow();
            int newQuantity = fullProduct.getQuantity() - 1;
            if (newQuantity < 0) {
                throw new IllegalArgumentException("Not enough stock for product: " + fullProduct.getProductName());
            }
            fullProduct.setQuantity(newQuantity);
            productRepository.save(fullProduct);
        }
    }


    public Order addNewOrder(Order order) {
//        order.setOrderCart(cartRepository.findById(order.getOrderCart().getCartId()).orElseThrow());
        order.setOrderPaymentType(paymentTypeRepository.findById(order.getOrderPaymentType().getPaymentId()).orElseThrow());
        order.setOrderShipping(shippingRepository.findById(order.getOrderShipping().getShippingID()).orElseThrow());
        order.setOrderUser(mapper.map(jwtUtils.getCurrentUser(), User.class));

        List<Product> productsSet = new ArrayList<>();
        for (Product product : order.getProducts()) {
            Product fullProduct = productRepository.findById(product.getProductId()).orElseThrow();
            productsSet.add(fullProduct);
        }
        order.setProducts(productsSet);

        float totalPrice = calculateTotalPrice(order);
        order.setTotal_price(totalPrice);

        updateProductQuantity(order);

        return orderRepository.save(order);
    }

    @Override
    public List<Order> fetchAllOrder() {
        return orderRepository.findAll();
    }

    @Override
    public Order getOrderById(int orderId) {
         Optional<Order> order = orderRepository.findById(orderId);
        if(order.isPresent()) {
            return order.get();
        }
        else{
            return null;
        }
    }

    @Override
    public boolean deleteOrder(int orderId) {
        if(orderRepository.findById(orderId).isPresent()){
            orderRepository.deleteById(orderId);
            return true;
        }
        return false;
    }
}
