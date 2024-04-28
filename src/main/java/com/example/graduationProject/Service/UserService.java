package com.example.graduationProject.Service;

import com.example.graduationProject.Entity.User;

import java.util.List;

public interface UserService {

    User addNewUser(User user);

    List<User> fetchAllUsers();

    User getUserById(int userId);

    User updateUser(int userId , User user);

    boolean deleteUser(int userId);

}
