package com.example.graduationProject.security;

import com.example.graduationProject.DTO.UserDto;
import com.example.graduationProject.Repository.UserRepository;
import lombok.extern.slf4j.Slf4j;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.servlet.HandlerExceptionResolver;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;

@Component
@Slf4j
public class AuthorizationFilter extends OncePerRequestFilter {

    private final JwtUtils jwtUtils;
    private final ModelMapper modelMapper;
    private final UserRepository userRepository;
    private final HandlerExceptionResolver resolver;

    public AuthorizationFilter(JwtUtils jwtUtils, ModelMapper modelMapper, UserRepository userRepository, @Qualifier("handlerExceptionResolver") HandlerExceptionResolver resolver) {
        this.jwtUtils = jwtUtils;
        this.modelMapper = modelMapper;
        this.userRepository = userRepository;
        this.resolver = resolver;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {

        try {
            String email = jwtUtils.getUserName(request);

            logger.info("user " + email + " is accessing leafy server");
            if (StringUtils.hasText(email)) {
                UserDto user = modelMapper.map(userRepository.findByEmail(email), UserDto.class);
                        UsernamePasswordAuthenticationToken authentication =
                        new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
        } catch (Exception e) {
            e.printStackTrace();
            resolver.resolveException(request, response, null, e);
            return;
        }
        filterChain.    doFilter(request, response);
    }
}
