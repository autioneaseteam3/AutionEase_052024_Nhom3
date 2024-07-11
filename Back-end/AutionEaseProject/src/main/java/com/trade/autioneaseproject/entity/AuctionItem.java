package com.trade.autioneaseproject.entity;

import jakarta.persistence.*;
import lombok.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter @Setter
@Entity
@Table(name = "auctionitems")
public class AuctionItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
