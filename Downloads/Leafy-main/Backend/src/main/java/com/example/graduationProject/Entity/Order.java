package com.example.graduationProject.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.*;

@Entity
@Table(name="order_ru")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="order_Id")
    private int orderId;
    @Column(name = "total_price")
    private float total_price;

    @Column(name="date")
    private LocalDate date;
//    @OneToOne
//    @JoinColumn(name = "ordercart", referencedColumnName = "c_Id")
//    private Cart orderCart;
    @OneToOne
    @JoinColumn(name = "orderpaymenttype", referencedColumnName = "payment_Id")
    private PaymentType orderPaymentType;
    @OneToOne
    @JoinColumn(name = "ordershipping", referencedColumnName = "shipping_Id")
    private Shipping orderShipping;
    @ManyToOne
    @JoinColumn(name = "orderuser", referencedColumnName = "user_id")
    private User orderUser;

    @ManyToMany(cascade = { CascadeType.DETACH }, fetch = FetchType.EAGER)
    @JoinTable(
            name = "productorder",
            joinColumns = @JoinColumn(name = "oid"),
            inverseJoinColumns = @JoinColumn(name = "pid")
    )
    private List<Product> products = new ArrayList<>();

    @PrePersist
    protected void onCreate() {
        date = LocalDate.now();  // Set the current date automatically before persisting the entity.
    }


}
