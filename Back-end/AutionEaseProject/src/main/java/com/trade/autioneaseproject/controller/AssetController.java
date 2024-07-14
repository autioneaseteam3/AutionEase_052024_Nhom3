package com.trade.autioneaseproject.controller;


import com.trade.autioneaseproject.entity.Asset;
import com.trade.autioneaseproject.service.AssetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/asset")
public class AssetController {

    @Autowired
    private AssetService assetService;

    // Thêm mới một asset
    @PostMapping("/add")
    public ResponseEntity<Asset> addAsset(@RequestBody Asset asset) {
        Asset newAsset = assetService.addAsset(asset);
        return ResponseEntity.ok(newAsset);
    }

    // Sửa một asset
    @PutMapping("/update")
    public ResponseEntity<Asset> updateAsset(@RequestBody Asset asset) {
        try {
            Asset updatedAsset = assetService.updateAsset(asset);
            return ResponseEntity.ok(updatedAsset);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }

    // Xóa một asset
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteAsset(@PathVariable("id") Integer assetID) {
        assetService.deleteAsset(assetID);
        return ResponseEntity.noContent().build();
    }

    // Tìm asset theo ID
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Asset>> findAssetById(@PathVariable("id") Integer assetID) {
        Optional<Asset> asset = assetService.findAssetById(assetID);
        if (asset.isPresent()) {
            return ResponseEntity.ok(asset);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Thêm phương thức này để lấy danh sách tất cả các assets
    @GetMapping("/all")
    public ResponseEntity<List<Asset>> findAllAssets() {
        List<Asset> assets = assetService.findAllAssets();
        return ResponseEntity.ok(assets);
    }

}
