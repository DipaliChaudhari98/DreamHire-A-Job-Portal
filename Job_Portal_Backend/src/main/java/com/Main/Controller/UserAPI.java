package com.Main.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.Main.DTO.LoginDTO;
import com.Main.DTO.ResponseDTO;
import com.Main.DTO.UserDTO;
import com.Main.Exception.JobPortalException;
import com.Main.Service.UserService;

import jakarta.validation.Valid;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;

@RestController
@CrossOrigin
@RequestMapping("/users")
@Validated
public class UserAPI {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<UserDTO> registerUser(@RequestBody @Valid UserDTO userDTO) throws Exception {
        System.out.println(userDTO);
        userDTO = userService.registerUser(userDTO);
        return new ResponseEntity<>(userDTO, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<UserDTO> loginUser(@RequestBody @Valid LoginDTO loginDTO) throws Exception {
        return new ResponseEntity<>(userService.loginUser(loginDTO), HttpStatus.OK);
    }

    @PostMapping("/sendOtp/{email}")
    public ResponseEntity<ResponseDTO> sendOtp(@PathVariable @Email(message = "{user.email.invalid}") String email) throws Exception {
        boolean sent = userService.sendOtp(email);
//        System.out.println("OTP sent, preparing response");
        if (sent) {
            return new ResponseEntity<>(new ResponseDTO("OTP sent Successfully."), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new ResponseDTO("OTP sending failed."), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/verifyOtp/{email}/{otp}")
    public ResponseEntity<ResponseDTO> verifyOtp(@PathVariable @Email(message = "{user.email.invalid}") String email,
                                                 @PathVariable @Pattern(regexp = "^[0-9]{6}$", message = "otp.invalid") String otp) throws Exception {
        boolean verified = userService.verifyOtp(email, otp);
        System.out.println("OTP verification, preparing response");
        if (verified) {
            return new ResponseEntity<>(new ResponseDTO("OTP has been verified Successfully."), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new ResponseDTO("OTP verification failed."), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/changedPass")
    public ResponseEntity<ResponseDTO> changePassword(@RequestBody @Valid LoginDTO loginDTO) throws JobPortalException {
        return new ResponseEntity<>(userService.changePassword(loginDTO), HttpStatus.OK);
    }
}
