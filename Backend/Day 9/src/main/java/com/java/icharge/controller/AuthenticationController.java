package com.java.icharge.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.java.icharge.dto.request.ForgotPasswordRequest;
import com.java.icharge.dto.request.LoginRequest;
import com.java.icharge.dto.request.RegisterRequest;
import com.java.icharge.dto.response.BasicResponse;
import com.java.icharge.dto.response.LoginResponse;
import com.java.icharge.service.AuthenticationService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@Tag(name = "Authentication", description = "It is used to authenticate and authorize the user.")

@RequestMapping("/icharge/api/v1/authentication")
public class AuthenticationController {
    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    @Operation(summary = "User Registration", description = "This is used to register a new user.")

    public ResponseEntity<?> register(@RequestBody RegisterRequest registerRequest) {
        BasicResponse<String> response = new BasicResponse<>();
        try {
            response = authenticationService.register(registerRequest);
            return new ResponseEntity<>(response, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Something went wrong");
            response.setData("");
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PostMapping("/login")
    @Operation(summary = "User Authentication", description = "Upon successful authtication , a  json web token will be generated.")

    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        BasicResponse<LoginResponse> response = new BasicResponse<>();
        try {
            response = authenticationService.login(loginRequest);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            response.setMessage("Something went wrong");
            response.setData(LoginResponse.builder().accessToken("").build());
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

    @PatchMapping("/forgot-password")
    @Operation(summary = "Forgot Password", description = "This is used to reset the password.")

    public ResponseEntity<?> forgotPassword(@RequestBody ForgotPasswordRequest forgotPasswordRequest) {
        BasicResponse<String> response = new BasicResponse<>();
        try {
            response = authenticationService.forgotPassword(forgotPasswordRequest);
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            response.setMessage("Something went wrong");
            response.setData("");
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);

        }
    }
}