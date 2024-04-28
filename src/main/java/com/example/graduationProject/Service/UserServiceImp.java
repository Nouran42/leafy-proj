package com.example.graduationProject.Service;

import com.example.graduationProject.Entity.User;
import com.example.graduationProject.Entity.UserType;
import com.example.graduationProject.Repository.UserRepository;
import com.example.graduationProject.Repository.UserTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public  class UserServiceImp implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private UserTypeRepository userTypeRepository;
    @Override
    public User addNewUser(User user) {
        Optional<UserType> optionalUserType = userTypeRepository.findById(user.getUser_type().getTypeId());
        if (optionalUserType.isPresent()) {
            UserType userType = optionalUserType.get();
            user.setUser_type(userType);
        } else {
            throw new IllegalArgumentException("Invalid UserType ID");
        }
        return userRepository.save(user);
    }
    @Override
    public List<User> fetchAllUsers() {
         return userRepository.findAll();
    }

    @Override
    public User getUserById(int userId) {
        Optional<User> user = userRepository.findById(userId);
        if (user.isPresent()) {
            return user.get();
        } else {
            return null;
        }
    }

    @Override
    public User updateUser(int userId, User user) {
        Optional<User> optionalUser = userRepository.findById(userId);

        if (optionalUser.isPresent()) {
            User existingUser = optionalUser.get();
            existingUser.setFirstName(user.getFirstName());
            existingUser.setLastName(user.getLastName());
            existingUser.setEmail(user.getEmail());

            if (user.getUser_type() != null) {
                Optional<UserType> optionalUserType = userTypeRepository.findById(user.getUser_type().getTypeId());
                if (optionalUserType.isPresent()) {
                    existingUser.setUser_type(optionalUserType.get());
                }
            } else {
                existingUser.setUser_type(null);  // Reset UserType if not provided in the update
            }

            return userRepository.save(existingUser);
        } else {
            return null;
        }
    }

    @Override
    public boolean deleteUser(int userId) {
        if (userRepository.findById(userId).isPresent()){
            userRepository.deleteById(userId);
            return true;
        }
        return false;
    }

}









