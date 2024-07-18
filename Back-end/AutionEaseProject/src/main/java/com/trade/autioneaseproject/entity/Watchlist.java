package com.trade.autioneaseproject.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Watchlists")
public class Watchlist {
    @Id
    private Integer watchlistID;

    @ManyToOne
    @JoinColumn(name = "userID")
    private Account account;

    @ManyToOne
    @JoinColumn(name = "assetID")
    private Asset asset;
}
