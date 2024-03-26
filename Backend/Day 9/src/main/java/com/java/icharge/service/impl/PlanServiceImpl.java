package com.java.icharge.service.impl;

import com.java.icharge.model.Plan;
import com.java.icharge.repository.PlanRepository;
import com.java.icharge.service.PlanService;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlanServiceImpl implements PlanService {

    private final PlanRepository planRepository;

    public PlanServiceImpl(PlanRepository planRepository) {
        this.planRepository = planRepository;
    }

    @Override
    public List<Plan> getAllPlans() {
        return planRepository.findAll();
    }

    @Override
    public Plan getPlanById(Long id) {
        return planRepository.findById(id).orElse(null);
    }

    @Override
    public Plan createPlan(Plan plan) {
        return planRepository.save(plan);
    }

    @Override
    public Plan updatePlan(Long id, Plan plan) {
        plan.setPlanId(id); // Make sure id is set
        return planRepository.save(plan);
    }

    @Override
    public void deletePlan(Long id) {
        planRepository.deleteById(id);
    }
}
