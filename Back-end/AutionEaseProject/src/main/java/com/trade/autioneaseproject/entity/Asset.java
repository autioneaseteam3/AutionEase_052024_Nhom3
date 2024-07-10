package com.trade.autioneaseproject.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Assets")
public class Asset {
    @Id
    private Integer assetID;
    private String assetName;
    private String mainImage;
    private String assetDescription;
    private Float assetPrice;

    @ManyToOne
    @JoinColumn(name = "assetTypeID")
    private AssetType assetType;

    @ManyToOne
    @JoinColumn(name = "assetStatusID")
    private AssetStatus assetStatus;

    @JsonIgnore
    @OneToMany(mappedBy = "asset", fetch = FetchType.EAGER)
    List<ImageAsset> imageAssets;

    @ManyToOne
    @JoinColumn(name = "shippingStatusID")
    private ShippingStatus shippingStatus;

    private Boolean delflag;


}
