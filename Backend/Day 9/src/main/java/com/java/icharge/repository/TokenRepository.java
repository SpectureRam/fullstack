package com.java.icharge.repository;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.java.icharge.model.Token;

public interface TokenRepository extends JpaRepository<Token, String> {
    List<Token> findAllByUser_IdAndRevokedFalseAndExpiredFalse(String userId);
    Optional<Token> findByToken(String token);
}