package com.trade.autioneaseproject.DAO;

import com.trade.autioneaseproject.entity.Warehouse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WarehouseDAO extends JpaRepository<Warehouse, Integer> {
}
