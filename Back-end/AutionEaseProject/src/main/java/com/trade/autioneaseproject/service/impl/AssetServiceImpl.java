package com.trade.autioneaseproject.service.impl;

import com.trade.autioneaseproject.dao.AssetDAO;
import com.trade.autioneaseproject.entity.Asset;
import com.trade.autioneaseproject.service.AssetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AssetServiceImpl implements AssetService {
    @Autowired
    private AssetDAO assetDAO;

    // Thêm mới một asset
    public Asset addAsset(Asset asset) {
        return assetDAO.save(asset);
    }

    // Sửa một asset
    public Asset updateAsset(Asset asset) {
        if (assetDAO.existsById(asset.getAssetID())) {
            return assetDAO.save(asset);
        } else {
            throw new IllegalArgumentException("Asset không tồn tại");
        }
    }

    // Xóa một asset
    public void deleteAsset(Integer assetID) {
        assetDAO.deleteById(assetID);
    }

    // Tìm asset theo ID
    public Optional<Asset> findAssetById(Integer assetID) {
        return assetDAO.findById(assetID);
    }
    @Override
    public List<Asset> findAllAssets() {
        return assetDAO.findAll();
    }
}
