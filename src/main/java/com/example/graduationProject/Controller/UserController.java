package com.example.graduationProject.Controller;


import com.example.graduationProject.Entity.User;
import com.example.graduationProject.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.ws.rs.PUT;
import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserService userService;
    @PostMapping("/users/create")
    public User addNewUser(@RequestBody User user){
        return userService.addNewUser(user);
    }
    @GetMapping("/users/all")
    public List<User> getAllUsers(){
        return userService.fetchAllUsers();
    }
    @GetMapping("/get/users/{userId}")
    public User getUserById(@PathVariable ("userId") int userId){
        return userService.getUserById(userId);
    }
    @PutMapping("/update/users/{userId}")
    public User updateUser(@PathVariable ("userId") int userId,  @RequestBody  User user){
        return userService.updateUser(userId , user);

    }
    @DeleteMapping("/delete/users/{userId}")
    public boolean deleteUser(@PathVariable ("userId") int userId){
        return userService.deleteUser(userId);
    }
}
