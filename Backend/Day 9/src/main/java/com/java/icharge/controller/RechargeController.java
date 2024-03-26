package com.java.icharge.controller;

import com.java.icharge.model.Recharge;
import com.java.icharge.service.RechargeService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recharges")
public class RechargeController {

    private final RechargeService rechargeService;

    public RechargeController(RechargeService rechargeService) {
        this.rechargeService = rechargeService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Recharge> getRechargeById(@PathVariable("id") Long rechargeId) {
        Recharge recharge = rechargeService.getRechargeById(rechargeId);
        if (recharge == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(recharge);
    }

    @PostMapping
    public ResponseEntity<Recharge> createRecharge(@RequestBody Recharge recharge) {
        Recharge createdRecharge = rechargeService.createRecharge(recharge);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdRecharge);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Recharge> updateRecharge(@PathVariable("id") Long rechargeId,
            @RequestBody Recharge recharge) {
        Recharge existingRecharge = rechargeService.getRechargeById(rechargeId);
        if (existingRecharge == null) {
            return ResponseEntity.notFound().build();
        }
        recharge.setRechargeId(rechargeId);
        Recharge updatedRecharge = rechargeService.updateRecharge(recharge);
        return ResponseEntity.ok(updatedRecharge);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRecharge(@PathVariable("id") Long rechargeId) {
        Recharge existingRecharge = rechargeService.getRechargeById(rechargeId);
        if (existingRecharge == null) {
            return ResponseEntity.notFound().build();
        }
        rechargeService.deleteRecharge(rechargeId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<Recharge>> getAllRecharges() {
        List<Recharge> recharges = rechargeService.getAllRecharges();
        return ResponseEntity.ok(recharges);
    }
}
