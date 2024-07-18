package com.trade.autioneaseproject.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Inventories")
public class Inventory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "inventoryID")
    private Integer inventoryID;

    @Column(name = "quantity", nullable = false)
    private Integer quantity;

    @Column(name = "entryTime", nullable = false)
    private Date entryTime;

    @Column(name = "exitTime", nullable = false)
    private Date exitTime;

    @ManyToOne
    @JoinColumn(name = "warehouseID")
    private Warehouse warehouse;

    @ManyToOne
    @JoinColumn(name = "assetID")
    private Asset asset;

    @Column(name = "delflag", nullable = false)
    private boolean delflag;
}
