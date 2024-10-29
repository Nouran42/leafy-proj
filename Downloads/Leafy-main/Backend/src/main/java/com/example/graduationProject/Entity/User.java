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
public class User {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "user_id")
        private int userId;
        @Column(name = "first_name")
        private String firstName;
        @Column(name = "last_name")
        private String lastName;
        @Column(name = "phone_no")
        private String phoneNumber;
        @Column(name = "password")
        private String password;
        @Column(name = "address")
        private String address;
        @Column(name = "email")
        private String email;
        @ManyToOne
        @JoinColumn(name = "user_type", referencedColumnName = "type_id")
        private UserType user_type;

    }


