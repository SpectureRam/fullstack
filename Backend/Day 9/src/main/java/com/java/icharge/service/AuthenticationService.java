package com.java.icharge.service;

import com.java.icharge.dto.request.ForgotPasswordRequest;
import com.java.icharge.dto.request.LoginRequest;
import com.java.icharge.dto.request.RegisterRequest;
import com.java.icharge.dto.response.BasicResponse;
import com.java.icharge.dto.response.LoginResponse;

public interface AuthenticationService {

    BasicResponse<String> register(RegisterRequest registerRequest);

    BasicResponse<LoginResponse> login(LoginRequest loginRequest);

    BasicResponse<String> forgotPassword(ForgotPasswordRequest forgotPasswordRequest);
}
