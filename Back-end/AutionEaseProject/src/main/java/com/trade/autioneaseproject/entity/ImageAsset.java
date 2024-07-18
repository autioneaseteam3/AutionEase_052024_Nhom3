package com.trade.autioneaseproject.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "ImageAssets")
public class ImageAsset {
    @Id
    private Integer imageAssetID;

    @ManyToOne
    @JoinColumn(name = "assetID")
    private Asset asset;

    private String imageAsset;
    private Boolean delflag;
}
