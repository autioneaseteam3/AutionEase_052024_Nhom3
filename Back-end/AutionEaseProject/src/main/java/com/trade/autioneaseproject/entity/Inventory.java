package com.trade.autioneaseproject.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Inventories")
public class Inventory {
    @Id
    private Integer inventoryID;
    private Integer quantity;
    private Date entryTime;
    private Date exitTime;

    @ManyToOne
    @JoinColumn(name = "warehouseID")
    private Warehouse warehouse;

    @ManyToOne
    @JoinColumn(name = "assetID")
    private Asset asset;

    private Boolean delflag;
}
