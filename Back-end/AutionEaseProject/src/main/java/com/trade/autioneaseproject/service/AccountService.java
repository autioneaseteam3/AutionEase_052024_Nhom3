package com.trade.autioneaseproject.service;

import com.trade.autioneaseproject.entity.Account;

import java.util.List;

public interface AccountService {
    Account findById(Integer userID);
    List<Account> findAll();

    List<Account> getAdministrators();

    Account create(Account account);

    Account update(Account account);

    void delete(Integer userID);




    void updateToken(String token, String email) throws Exception;

    Account getByToken(String token);

    void updatePassword(Account entity, String newPassword);

    void changePassword(Account entity, String newPassword);

    Account findByUsername(String email);
}
