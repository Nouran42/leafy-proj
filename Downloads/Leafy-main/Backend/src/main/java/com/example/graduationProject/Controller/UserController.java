package com.example.graduationProject.Controller;


import com.example.graduationProject.DTO.LoginRequest;
import com.example.graduationProject.DTO.LoginResponse;
import com.example.graduationProject.DTO.UserDto;
import com.example.graduationProject.Entity.User;
import com.example.graduationProject.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserService userService;
    @PostMapping("/users/create")
    public User addNewUser(@RequestBody UserDto userDto){
        return userService.addNewUser(userDto);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest loginRequest) {
      return ResponseEntity.ok(userService.login(loginRequest.getEmail(), loginRequest.getPassword()));
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
