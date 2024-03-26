package com.java.icharge.dto.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ForgotPasswordRequest {
    private String email;
    private String currentPassword;
    private String newpassword;
    private String confirmPassword;
}
