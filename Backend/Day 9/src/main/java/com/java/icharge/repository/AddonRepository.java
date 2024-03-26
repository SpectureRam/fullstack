package com.java.icharge.repository;

import com.java.icharge.model.Addon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AddonRepository extends JpaRepository<Addon, Long> {
}
