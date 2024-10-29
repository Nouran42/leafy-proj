package com.example.graduationProject.Service;

import com.example.graduationProject.DTO.LoginResponse;
import com.example.graduationProject.DTO.UserDto;
import com.example.graduationProject.Entity.User;
import com.example.graduationProject.Entity.UserType;
import com.example.graduationProject.Repository.UserRepository;
import com.example.graduationProject.Repository.UserTypeRepository;
import com.example.graduationProject.security.JwtUtils;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private UserTypeRepository userTypeRepository;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtUtils jwtUtils;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private ModelMapper modelMapper;


    @Override
    public User addNewUser(UserDto userDto) {
        // Check if the email already exists
        if (userRepository.existsByEmail(userDto.getEmail())) {
            throw new IllegalArgumentException("Email already exists");
        }
        userDto.setPassword(passwordEncoder.encode(userDto.getPassword()));
        Optional<UserType> optionalUserType = userTypeRepository.findById(userDto.getUser_type().getTypeId());
        if (optionalUserType.isPresent()) {
            UserType userType = optionalUserType.get();
            userDto.setUser_type(userType);
        } else {
            throw new IllegalArgumentException("Invalid UserType ID");
        }

        // Save and return the new user
        return userRepository.save(modelMapper.map(userDto, User.class));
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

    @Override
    public LoginResponse login(String email, String password ) {
        UserDto userDetails = null;
            try {
                userDetails = (UserDto) authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email, password)).getPrincipal();
            } catch (Exception e) {
                e.printStackTrace();
                throw new RuntimeException("User is not authorized");
            }
            return new LoginResponse(userDetails.getEmail(),jwtUtils.generateJwtToken(userDetails) , userDetails.getUser_type().getTypeId());

    }

}










