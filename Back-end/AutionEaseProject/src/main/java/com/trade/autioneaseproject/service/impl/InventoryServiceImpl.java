package com.trade.autioneaseproject.service.impl;

import com.trade.autioneaseproject.DAO.InventoryDAO;
import com.trade.autioneaseproject.entity.Inventory;
import com.trade.autioneaseproject.services.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InventoryServiceImpl implements InventoryService {

    @Autowired
    private InventoryDAO inventoryDAO;
    @Override
    public List<Inventory> getAll() {
        return inventoryDAO.findAllActive();
    }

    @Override
    public Inventory getOne(Integer id) {
        return inventoryDAO.findActiveById(id).orElseThrow(() -> new RuntimeException("Inventory not found"));
    }

    @Override
    public Inventory create(Inventory inventory) {
        return inventoryDAO.save(inventory);
    }

    @Override
    public Inventory update(Integer id, Inventory inventory) {
        Inventory existingInventory = inventoryDAO.findActiveById(id)
                .orElseThrow(() -> new RuntimeException("Inventory not found"));

        existingInventory.setQuantity(inventory.getQuantity());
        existingInventory.setEntryTime(inventory.getEntryTime());
        existingInventory.setExitTime(inventory.getExitTime());
        existingInventory.setWarehouseID(inventory.getWarehouseID());
        existingInventory.setAssetID(inventory.getAssetID());
        existingInventory.setDelflag(inventory.isDelflag());

        return this.inventoryDAO.save(existingInventory);
    }

    @Override
    public boolean delete(Integer id) {
        try {
            Inventory inventory = inventoryDAO.findActiveById(id)
                    .orElseThrow(() -> new RuntimeException("Inventory not found"));
            inventory.setDelflag(true);
            inventoryDAO.save(inventory);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }
}
