package com.example.graduationProject.Service;

import com.example.graduationProject.Entity.UserType;
import com.example.graduationProject.Repository.UserTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class UserTypeServiceImp implements UserTypeService{
    @Autowired
    private UserTypeRepository userTypeRepository;
    @Override
    public List<UserType> fetchAllUserTypes() {
        return userTypeRepository.findAll();
    }
    @Override
    public Optional<UserType> getUserTypeById(int typeId) {
        return userTypeRepository.findById(typeId);
    }
    @Override
    public UserType updateUserType(int typeId, UserType userType) {
        Optional<UserType> optionalUserType = userTypeRepository.findById(typeId);
        if (optionalUserType.isPresent()) {
            UserType existingUserType = optionalUserType.get();
            existingUserType.setTypeName(userType.getTypeName());
            existingUserType.setTypeId(userType.getTypeId());
            return userTypeRepository.save(existingUserType);
        } else {
            return null;
        }
    }
    @Override
    public boolean deleteUserType(int userTypeId) {
        if (userTypeRepository.findById(userTypeId).isPresent()) {
            userTypeRepository.deleteById(userTypeId);
            return true;
        }
        return false;
    }
    }

