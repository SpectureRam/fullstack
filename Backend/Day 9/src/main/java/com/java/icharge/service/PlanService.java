package com.java.icharge.service;

import com.java.icharge.model.Plan;

import java.util.List;

public interface PlanService {
    List<Plan> getAllPlans();
    Plan getPlanById(Long id);
    Plan createPlan(Plan plan);
    Plan updatePlan(Long id, Plan plan);
    void deletePlan(Long id);
}
