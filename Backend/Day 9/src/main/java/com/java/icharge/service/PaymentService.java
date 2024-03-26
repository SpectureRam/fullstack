package com.java.icharge.service;

import com.java.icharge.model.Payment;

import java.util.List;

public interface PaymentService {
    Payment getPaymentById(Long paymentId);
    Payment createPayment(Payment payment);
    Payment updatePayment(Payment payment);
    void deletePayment(Long paymentId);
    List<Payment> getAllPayments();
}
