package com.example.graduationProject.Service;

import com.example.graduationProject.DTO.UserDto;
import com.example.graduationProject.Entity.User;
import com.example.graduationProject.Repository.UserRepository;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Objects;


@AllArgsConstructor
@Component
public class UserDetailsServiceImpl implements UserDetailsService {

    private UserRepository userRepository;
    private ModelMapper modelMapper;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        User user = userRepository.findByEmail(email);
            if (Objects.nonNull(user))
            return modelMapper.map(user, UserDto.class);
        throw new RuntimeException("User is not authorized");
    }
}
