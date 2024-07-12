package com.trade.autioneaseproject.dao;

import com.trade.autioneaseproject.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AccountDAO extends JpaRepository<Account, Integer> {
    Account findByUsername(String email);
    @Query("SELECT DISTINCT ar.account FROM Authority ar WHERE ar.role.roleID IN(1,2)")
    List<Account> getAdministrators();

    @Query("SELECT a FROM Account a WHERE a.email =?1 and a.password=?2")
    Account getAccount(String email, String password);

    // Phuc vu viec gui mail
    @Query("SELECT a FROM Account a WHERE a.email=?1")
    public Account findByEmail(String email);

    @Query("SELECT a FROM Account a WHERE a.token=?1")
    public Account findByToken(String token);

    @Query("SELECT u FROM Account u WHERE u.firstName LIKE %:firstName% OR u.email LIKE %:firstName% OR u.email LIKE %:firstName%")
    List<Account> findByUsernameLike(@Param("firstName") String firstName);
}
