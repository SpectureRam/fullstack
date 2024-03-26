package com.java.icharge.service;

import com.java.icharge.model.Customer;

import java.util.List;

public interface CustomerService {
    Customer getCustomerById(Integer customerId);

    Customer createCustomer(Customer customer);

    Customer updateCustomer(Customer customer);

    void deleteCustomer(Integer customerId);

    List<Customer> getAllCustomers();
}
