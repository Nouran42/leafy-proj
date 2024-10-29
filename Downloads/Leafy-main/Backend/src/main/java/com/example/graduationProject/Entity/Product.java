package com.example.graduationProject.Entity;


import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.HashSet;
import java.util.Set;


@Entity
@Table
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "product_Id")
    private int productId;
    @Column(name = "p_description")
    private String productDesc;
    @Column(name = "category")
    private String category;
    @Column(name="price")
    private double price;
    @Column(name="p_name")
    private String productName;
    @Column(name = "image")
    @Lob
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private byte[] image;

    @Column(name = "additional_image")
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @Lob
    private byte[] additionalImage;

    @Column(name="quantity")
    private  int quantity;

//    @ManyToMany(mappedBy = "products")
//    private Set<Order> orders = new HashSet<>();

}
