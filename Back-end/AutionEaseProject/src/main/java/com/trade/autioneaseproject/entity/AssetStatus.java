package com.trade.autioneaseproject.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "AssetStatuses")
public class AssetStatus {
    @Id
    private Integer assetStatusID;
    private String assetStatusName;
    private Boolean delflag;
}
