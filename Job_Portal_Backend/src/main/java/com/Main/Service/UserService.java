package com.Main.Service;

import org.springframework.stereotype.Repository;
import com.Main.DTO.LoginDTO;
import com.Main.DTO.ResponseDTO;
import com.Main.DTO.UserDTO;
import com.Main.Exception.JobPortalException;

import jakarta.validation.Valid;

@Repository
public interface UserService {

    // Method to register a new user
    public UserDTO registerUser(UserDTO userDTO) throws Exception;

    // Method for user login
    public UserDTO loginUser(LoginDTO loginDTO) throws JobPortalException;
    
    // Method to send OTP to the user's email
    public Boolean sendOtp(String email) throws Exception;

    // Method to verify OTP for the user
    public boolean verifyOtp(String email, String otp) throws JobPortalException;

    // Method to change the user's password
    public ResponseDTO changePassword(LoginDTO loginDTO) throws JobPortalException;

    // Method to fetch user details by email
    public UserDTO getUserByEmail(String email) throws JobPortalException;
}
