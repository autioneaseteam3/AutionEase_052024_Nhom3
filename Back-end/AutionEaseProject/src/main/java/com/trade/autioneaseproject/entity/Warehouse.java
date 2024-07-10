package com.trade.autioneaseproject.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "Warehouses")
public class Warehouse {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "warehouseID")
    private Integer warehouseId;

    @Column(name = "location", nullable = false)
    private String location;

    @Column(name = "delflag", nullable = false)
    private boolean delflag;
}
