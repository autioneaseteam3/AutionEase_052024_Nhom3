package com.trade.autioneaseproject.dao;

import com.trade.autioneaseproject.entity.Asset;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AssetDAO extends JpaRepository<Asset, Integer> {
}
