package com.example.graduationProject.Entity;


import jakarta.persistence.*;

import java.util.List;


@Entity
@Table(name = "usertype")

public class UserType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="type_id")
    private int typeId;

    @Column(name="type_name")
    private String typeName;



    public int getTypeId() {
        return typeId;
    }

    public void setTypeId(int typeId) {
        this.typeId = typeId;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }
}
