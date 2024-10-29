package com.example.graduationProject.security;

import java.util.Date;
import java.util.Objects;

import com.example.graduationProject.DTO.UserDto;
import com.example.graduationProject.config.AppConfigProperties;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.servlet.http.HttpServletRequest;

import org.springframework.http.HttpHeaders;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import io.jsonwebtoken.Jwts;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
@AllArgsConstructor
public class JwtUtils {
    private AppConfigProperties config;


    public String getUserName(HttpServletRequest request) {
        String token = parseJwt(request);
        log.info("Token " + token + " is parsed with jwt");
        if (!StringUtils.hasText(token)) {
            return null;
        }

        return Jwts.parser().setSigningKey(config.getJwtSecret()).parseClaimsJws(token).getBody().getSubject();
    }

    public String getJwtToken(HttpServletRequest request) {
        String accessTokenType = request.getHeader("Access-Token-Type");
        boolean mobileViewToken = accessTokenType != null && accessTokenType.equals("Mobile");
        if (!mobileViewToken)
            return request.getHeader(HttpHeaders.AUTHORIZATION);
        else
            return request.getHeader("Authorization-Generated");
    }

    public String getJwtToken() {
        return ((ServletRequestAttributes) Objects.requireNonNull(RequestContextHolder.getRequestAttributes()))
                .getRequest().getHeader(HttpHeaders.AUTHORIZATION);
    }


    private String parseJwt(HttpServletRequest request) {
        String headerAuth = request.getHeader(HttpHeaders.AUTHORIZATION);
        String accessTokenType = request.getHeader("Access-Token-Type");
        boolean mobileViewToken = accessTokenType != null && accessTokenType.equals("Mobile");

        log.info("HeaderAuth : " + headerAuth + " accessTokenType : " + accessTokenType + " (" + mobileViewToken + ")");

        if (mobileViewToken) {
            headerAuth = request.getHeader("Authorization-Generated");
        }

        log.info("HeaderAuth : " + headerAuth + " accessTokenType : " + accessTokenType + " (" + mobileViewToken + ")");


        return parseJwt(headerAuth);
    }

    private String parseJwt(String token) {

        if (StringUtils.hasText(token) && token.startsWith(config.getHeaderPrefix())) {
            return token.substring(7, token.length());
        }
        return null;
    }

    public String generateJwtToken(UserDto user) {
        return Jwts.builder().setSubject((user.getEmail())).setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + config.getJwtExpirationMs()))
                .signWith(SignatureAlgorithm.HS512, config.getJwtSecret())
                .compact();
    }

    public UserDto getCurrentUser() {
        UserDto userDto = (UserDto) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return userDto;
    }
}