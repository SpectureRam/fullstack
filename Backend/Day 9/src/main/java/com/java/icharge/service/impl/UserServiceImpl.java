package com.java.icharge.service.impl;

import com.java.icharge.enumerate.Role;
import com.java.icharge.model.Customer;
import com.java.icharge.model.User;
import com.java.icharge.repository.CustomerRepository;
import com.java.icharge.repository.UserRepository;
import com.java.icharge.service.UserService;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final CustomerRepository customerRepository;

    public UserServiceImpl(UserRepository userRepository, CustomerRepository customerRepository) {
        this.userRepository = userRepository;
        this.customerRepository = customerRepository;
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(String id) {
        return userRepository.findById(id).orElse(null);
    }

    @Override
    public User createUser(User user) {
        User savedUser = userRepository.save(user);
        return savedUser;
    }

    @Override
    public User updateUser(String id, User user) {
        user.setId(id);
        return userRepository.save(user);
    }

    @Override
    public void deleteUser(String id) {
        userRepository.deleteById(id);
    }
}
