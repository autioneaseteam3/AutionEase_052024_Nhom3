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
@Table(name = "AssetTypes")
public class AssetType {
    @Id
    private Integer assetTypeID;
    private String assetTypeName;
    private Boolean delflag;
}
