package com.java.icharge.service;

import com.java.icharge.model.Recharge;

import java.util.List;

public interface RechargeService {
    Recharge getRechargeById(Long rechargeId);
    Recharge createRecharge(Recharge recharge);
    Recharge updateRecharge(Recharge recharge);
    void deleteRecharge(Long rechargeId);
    List<Recharge> getAllRecharges();
}
