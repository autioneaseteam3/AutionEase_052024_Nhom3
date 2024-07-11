package com.trade.autioneaseproject.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "BillItems")
public class BillItem {
    @Id
    private Integer billItemID;

    @ManyToOne
    @JoinColumn(name = "billID")
    private Bill bill;

    @ManyToOne
    @JoinColumn(name = "assetID")
    private Asset asset;

    @ManyToOne
    @JoinColumn(name = "taxID")
    private Tax tax;

    private Integer bidAmount;

    @ManyToOne
    @JoinColumn(name = "depositID")
    private Deposit deposit;
}
