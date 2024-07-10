package com.trade.autioneaseproject.dao;

import com.trade.autioneaseproject.entity.Warehouse;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WarehouseDAO extends JpaRepository<Warehouse, Integer> {
}
