package com.java.icharge.service.impl;

import com.java.icharge.model.Addon;
import com.java.icharge.repository.AddonRepository;
import com.java.icharge.service.AddonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AddonServiceImpl implements AddonService {

    private final AddonRepository addonRepository;

    @Autowired
    public AddonServiceImpl(AddonRepository addonRepository) {
        this.addonRepository = addonRepository;
    }

    @Override
    public Addon getAddonById(Long addonId) {
        Optional<Addon> addonOptional = addonRepository.findById(addonId);
        return addonOptional.orElse(null);
    }

    @Override
    public Addon createAddon(Addon addon) {
        return addonRepository.save(addon);
    }

    @Override
    public Addon updateAddon(Addon addon) {
        return addonRepository.save(addon);
    }

    @Override
    public void deleteAddon(Long addonId) {
        addonRepository.deleteById(addonId);
    }

    @Override
    public List<Addon> getAllAddons() {
        return addonRepository.findAll();
    }
}
