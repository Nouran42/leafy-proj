package com.example.graduationProject.Service;

import com.example.graduationProject.DTO.LoginResponse;
import com.example.graduationProject.DTO.UserDto;
import com.example.graduationProject.Entity.User;

import java.util.List;

public interface UserService {

    User addNewUser(UserDto user);

    List<User> fetchAllUsers();

    User getUserById(int userId);

    User updateUser(int userId , User user);

    boolean deleteUser(int userId);

    LoginResponse login(String email, String password);


}
