package com.trade.autioneaseproject.entity;
import jakarta.persistence.*;
import lombok.Data;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Authorities")
public class Authority {
    @Id
    private Integer authorityID;

    @ManyToOne
    @JoinColumn(name = "userID")
    private Account account;

    @ManyToOne
    @JoinColumn(name = "roleID")
    private Role role;
}
