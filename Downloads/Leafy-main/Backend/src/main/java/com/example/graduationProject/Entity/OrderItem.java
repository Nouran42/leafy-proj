package com.example.graduationProject.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "productorder")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    //@ManyToOne
    @JoinColumn(name = "oid")
    private int orderId;

    @ManyToOne
    @JoinColumn(name = "pid")
    private Product product;

    @Column(name = "quantity")
    private int quantity;
}

