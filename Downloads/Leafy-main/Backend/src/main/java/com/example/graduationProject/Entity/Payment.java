package com.example.graduationProject.Entity;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="pay_id")
    private int pay_id;


    @ManyToOne
    @JoinColumn(name = "pay_type", referencedColumnName = "payment_Id")
    private PaymentType pay_type;

}
