package com.example.graduationProject.Entity;

import jakarta.persistence.*;

@Entity
@Table
public class Shipping {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="shipping_Id")
    private int shippingID;

    public Shipping(int shippingID) {
        this.shippingID = shippingID;
    }

    public Shipping() {
    }

    public int getShippingID() {
        return shippingID;
    }

    public void setShippingID(int shippingID) {
        this.shippingID = shippingID;
    }
}


