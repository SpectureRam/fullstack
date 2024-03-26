package com.java.icharge.service.impl;

import com.java.icharge.model.Recharge;
import com.java.icharge.repository.RechargeRepository;
import com.java.icharge.service.RechargeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RechargeServiceImpl implements RechargeService {

    private final RechargeRepository rechargeRepository;

    @Autowired
    public RechargeServiceImpl(RechargeRepository rechargeRepository) {
        this.rechargeRepository = rechargeRepository;
    }

    @Override
    public Recharge getRechargeById(Long rechargeId) {
        Optional<Recharge> rechargeOptional = rechargeRepository.findById(rechargeId);
        return rechargeOptional.orElse(null);
    }

    @Override
    public Recharge createRecharge(Recharge recharge) {
        return rechargeRepository.save(recharge);
    }

    @Override
    public Recharge updateRecharge(Recharge recharge) {
        return rechargeRepository.save(recharge);
    }

    @Override
    public void deleteRecharge(Long rechargeId) {
        rechargeRepository.deleteById(rechargeId);
    }

    @Override
    public List<Recharge> getAllRecharges() {
        return rechargeRepository.findAll();
    }
}
