package com.java.icharge.controller;

import com.java.icharge.model.Addon;
import com.java.icharge.service.AddonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/addons")
public class AddonController {

    private final AddonService addonService;

    @Autowired
    public AddonController(AddonService addonService) {
        this.addonService = addonService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Addon> getAddonById(@PathVariable("id") Long addonId) {
        Addon addon = addonService.getAddonById(addonId);
        if (addon == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(addon);
    }

    @PostMapping
    public ResponseEntity<Addon> createAddon(@RequestBody Addon addon) {
        Addon createdAddon = addonService.createAddon(addon);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdAddon);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Addon> updateAddon(@PathVariable("id") Long addonId, @RequestBody Addon addon) {
        Addon existingAddon = addonService.getAddonById(addonId);
        if (existingAddon == null) {
            return ResponseEntity.notFound().build();
        }
        addon.setAddonId(addonId);
        Addon updatedAddon = addonService.updateAddon(addon);
        return ResponseEntity.ok(updatedAddon);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAddon(@PathVariable("id") Long addonId) {
        Addon existingAddon = addonService.getAddonById(addonId);
        if (existingAddon == null) {
            return ResponseEntity.notFound().build();
        }
        addonService.deleteAddon(addonId);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<Addon>> getAllAddons() {
        List<Addon> addons = addonService.getAllAddons();
        return ResponseEntity.ok(addons);
    }
}
