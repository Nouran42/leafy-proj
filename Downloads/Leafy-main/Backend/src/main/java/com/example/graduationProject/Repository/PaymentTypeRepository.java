package com.example.graduationProject.Repository;

import com.example.graduationProject.Entity.PaymentType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentTypeRepository extends JpaRepository<PaymentType , Integer> {
}
