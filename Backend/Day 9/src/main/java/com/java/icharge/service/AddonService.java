package com.java.icharge.service;

import com.java.icharge.model.Addon;

import java.util.List;

public interface AddonService {
    Addon getAddonById(Long addonId);
    Addon createAddon(Addon addon);
    Addon updateAddon(Addon addon);
    void deleteAddon(Long addonId);
    List<Addon> getAllAddons();
}
