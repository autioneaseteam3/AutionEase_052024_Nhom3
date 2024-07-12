package com.trade.autioneaseproject.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Accounts")
public class Account {
    @Id
    private Integer userID;
    private String firstName;
    private String lastName;
    private String password;
    private String address;
    private Boolean bit;
    private String email;
    private String phoneNumber;
    private String SSN;
    private String favorite;
    private String token;
    private Boolean delflag;
    public boolean delflag() {
        return delflag;
    }
    public void setDelflag(boolean active) {
        delflag = active;
    }
    @JsonIgnore
    @OneToMany(mappedBy = "account", fetch = FetchType.EAGER)
    List<Authority> authorities;
}
