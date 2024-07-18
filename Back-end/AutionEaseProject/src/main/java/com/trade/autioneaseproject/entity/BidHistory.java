package com.trade.autioneaseproject.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "BidHistiries")
public class BidHistory {
    @Id
    private Integer bidHistoryID;

    @ManyToOne
    @JoinColumn(name = "auctionItemID")
    private AuctionItem auctionItem;

    @ManyToOne
    @JoinColumn(name = "userID")
    private Account account;

    private Float bidAmount;
    private Date bidTime;
}
