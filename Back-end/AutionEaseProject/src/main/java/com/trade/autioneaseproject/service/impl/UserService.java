package com.trade.autioneaseproject.service.impl;

import com.trade.autioneaseproject.entity.Account;
import com.trade.autioneaseproject.service.AccountService;
import com.trade.autioneaseproject.service.SessionService;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import java.util.NoSuchElementException;

/** @noinspection ConstantConditions*/
@Service
public class UserService implements UserDetailsService {

    private final AccountService accountService;

    private final SessionService session;

    private final BCryptPasswordEncoder pe;

    public UserService(AccountService accountService, SessionService session, BCryptPasswordEncoder pe) {
        this.accountService = accountService;
        this.session = session;
        this.pe = pe;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        try {
            Account user = accountService.findByUsername(email);
            session.set("user", user);
            session.set("email", user.getEmail());

            if (!user.delflag()) {
                throw new RuntimeException("Tài khoản bạn đã bị khoá");
            }

            String password = pe.encode(user.getPassword()); // Mã hóa mật khẩu
            String[] roles = (String[]) user.getAuthorities().stream().map(er -> er.getRole().getRoleID()).toList()
                    .toArray();
            Map<String, Object> authentication = new HashMap<>();
            authentication.put("user", user);
            byte[] token = (email + ":" + user.getPassword()).getBytes();
            authentication.put("token", "Basic " + Base64.getEncoder().encodeToString(token));
            session.set("authentication", authentication);
            return User.withUsername(email).password(password).roles(roles).build();
        } catch (NoSuchElementException e) {
            throw new UsernameNotFoundException(email + " not found!");
        }
    }
}
