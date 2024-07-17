package com.trade.autioneaseproject.dao;

import com.trade.autioneaseproject.entity.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface InventoryDAO extends JpaRepository<Inventory, Integer> {

    //Retrieve only non-deleted data
    @Query("SELECT i FROM Inventory i WHERE i.delflag = true")
    List<Inventory> getAll();

    @Query("SELECT i FROM Inventory i WHERE i.inventoryID = :id AND i.delflag = true")
    Optional<Inventory> findInventoryById(Integer id);
}
