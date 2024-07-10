package com.trade.autioneaseproject.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "AuctionItems")
public class AuctionItem {
    @Id
    private Integer auctionItemID;

    @ManyToOne
    @JoinColumn(name = "auctionSessionID")
    private AuctionSession auctionSession;

    @ManyToOne
    @JoinColumn(name = "assetID")
    private Asset asset;

    private Float startingBids;
    private Float bidIncrement;
    private Boolean delflag;
}
