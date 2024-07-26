package com.trade.autioneaseproject.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Deposits")
public class Deposit {
    @Id
    private Integer depositID;

    @ManyToOne
    @JoinColumn(name = "auctionSessionID")
    private AuctionSession auctionSession;

    @ManyToOne
    @JoinColumn(name = "userID")
    private Account account;

    private Float depositAmount;
}
