package com.trade.autioneaseproject.service;

import com.trade.autioneaseproject.dao.AssetDAO;
import com.trade.autioneaseproject.entity.Asset;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;
public interface AssetService {
    Asset addAsset(Asset asset);
    Asset updateAsset(Asset asset);
    void deleteAsset(Integer assetID);
    Optional<Asset> findAssetById(Integer assetID);
    List<Asset> findAllAssets(); // Thêm phương thức này
}