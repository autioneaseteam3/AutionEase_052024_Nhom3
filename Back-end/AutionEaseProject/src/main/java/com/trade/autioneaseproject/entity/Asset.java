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
    private String asset_name;
    private String mainImage;
    private String asset_description;
    private Float asset_price;

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
    @JoinColumn(name = "shipping_statusID")
    private ShippingStatus shippingStatus;

    private Boolean delflag;


}
