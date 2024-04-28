package com.example.graduationProject.Controller;

import com.example.graduationProject.Entity.UserType;
import com.example.graduationProject.Service.UserTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
public class UserTypeController {
    @Autowired
    private UserTypeService userTypeService;
    @GetMapping("/get/userType/all")
    public List<UserType> userTypeList(){
        return userTypeService.fetchAllUserTypes();
    }


}
