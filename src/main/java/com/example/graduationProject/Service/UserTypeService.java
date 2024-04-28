package com.example.graduationProject.Service;

import com.example.graduationProject.Entity.UserType;

import java.util.List;
import java.util.Optional;

public interface UserTypeService {

    UserType addNewUserType(UserType userType);

    List<UserType> fetchAllUserTypes();

    Optional<UserType> getUserTypeById(int userTypeId);

    UserType updateUserType(int userTypeId, UserType userType);

    boolean deleteUserType(int userTypeId);
}
