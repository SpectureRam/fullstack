package com.java.icharge;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.java.icharge.enumerate.Role;
import com.java.icharge.model.User;
import com.java.icharge.repository.UserRepository;
import lombok.RequiredArgsConstructor;

@SpringBootApplication
@RequiredArgsConstructor
public class MainApplication {

    private final PasswordEncoder passwordEncoder;

    public static void main(String[] args) {
        SpringApplication.run(MainApplication.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(UserRepository userRepository) {
        return args -> {
            if (userRepository.count() > 0)
                return;
            var admin = User.builder()
                    .userName("Admin")
                    .email("admin@gmail.com")
                    .password(passwordEncoder.encode("Admin@123"))
                    .mobileNumber("8675160850")
                    .role(Role.ADMIN)
                    .build();
            userRepository.save(admin);
        };
    }
}