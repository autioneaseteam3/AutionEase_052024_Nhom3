package com.trade.autioneaseproject;

import com.trade.autioneaseproject.dao.AccountDAO;
import com.trade.autioneaseproject.dao.BidHistoryDAO;
import com.trade.autioneaseproject.service.AccountService;
import com.trade.autioneaseproject.service.SessionService;
import com.trade.autioneaseproject.service.impl.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;

@Configuration
@EnableWebSecurity
public class SercurityConfig{
    @Autowired
    AccountService accountService;

    @Autowired
    UserService userService;

    @Autowired
    BCryptPasswordEncoder pe;

    @Autowired
    SessionService session;

    @Autowired
    BidHistoryDAO cartdao;

    @Autowired
    AccountDAO accountdao;

    /* Cơ chế mã hóa mật khẩu */
    @Bean
    public BCryptPasswordEncoder getPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    /* Quản lý dữ liệu người sử dụng */
    @Bean
    public UserDetailsService userDetailsService() {
        return userService;
    }

    /* Phân quyền sử dụng */
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(authorizeRequests -> authorizeRequests
                        .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                        .requestMatchers("/favorites", "/favorite/error", "/order/**", "/auth/change-password", "/cart", "/checkout/**").authenticated()
                        .requestMatchers("/admin/**").hasAnyRole("STAF", "DIRE")
                        .anyRequest().permitAll()
                )
                .formLogin(formLogin -> formLogin
                        .loginPage("/auth/login/form")
                        .loginProcessingUrl("/auth/login")
                        .defaultSuccessUrl("/auth/login/success", true)
                        .failureUrl("/auth/login/error")
                )
                .rememberMe(rememberMe -> rememberMe
                        .tokenValiditySeconds(86400)
                )
                .exceptionHandling(exceptionHandling -> exceptionHandling
                        .accessDeniedPage("/auth/unauthorized")
                )
                .logout(logout -> logout
                        .logoutUrl("/auth/logout")
                        .logoutSuccessUrl("/auth/logout/success")
                        .addLogoutHandler(new SecurityContextLogoutHandler())
                );
//                .oauth2Login(oauth2Login -> oauth2Login
//                        .loginPage("/auth/login/form")
//                        .defaultSuccessUrl("/oauth2/login/success", true)
//                        .failureUrl("/auth/login/error")
//                        .authorizationEndpoint().baseUri("/oauth2/authorization")
//                );

        return http.build();
    }

    @Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userService).passwordEncoder(getPasswordEncoder());
    }
}
