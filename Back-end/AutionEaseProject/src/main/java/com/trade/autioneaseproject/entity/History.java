package com.trade.autioneaseproject.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Histories")
public class History {
    @Id
    private Integer historyID;

    @ManyToOne
    @JoinColumn(name = "userID")
    private Account account;

    @ManyToOne
    @JoinColumn(name = "bidHistoryID")
    private BidHistory bidHistory;

    @ManyToOne
    @JoinColumn(name = "billID")
    private Bill bill;

}
