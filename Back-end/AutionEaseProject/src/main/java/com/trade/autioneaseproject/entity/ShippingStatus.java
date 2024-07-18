package com.trade.autioneaseproject.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "ShippingStatuses")
public class ShippingStatus {
    @Id
    private Integer shippingStatusID;
    private String SSName;
}
