package com.trade.autioneaseproject.service.impl;

import com.trade.autioneaseproject.dao.InventoryDAO;
import com.trade.autioneaseproject.entity.Asset;
import com.trade.autioneaseproject.entity.Inventory;
import com.trade.autioneaseproject.entity.Warehouse;
import com.trade.autioneaseproject.request.InventoryDTO;
import com.trade.autioneaseproject.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class InventoryServiceImpl implements InventoryService {

    @Autowired
    private InventoryDAO inventoryDAO;
    @Override
    public List<InventoryDTO> getAll() {

        List<Inventory> inventories = inventoryDAO.getAll();
        List<InventoryDTO> inventoryDTOs = new ArrayList<>();

        for (Inventory inventory : inventories){
            InventoryDTO dto = new InventoryDTO();
            dto.setInventoryID(inventory.getInventoryID());
            dto.setQuantity(inventory.getQuantity());
            dto.setEntryTime(inventory.getEntryTime());
            dto.setExitTime(inventory.getExitTime());
            dto.setWarehouseID(inventory.getWarehouse().getWarehouseID());
            dto.setAssetID(inventory.getAsset().getAssetID());
            dto.setDelflag(inventory.isDelflag());
            inventoryDTOs.add(dto);
        }

        return inventoryDTOs;
    }

    @Override
    public InventoryDTO getOne(Integer id) {
        Inventory inventory = inventoryDAO.findInventoryById(id)
                .orElseThrow(() -> new RuntimeException("Inventory not found")); //Return exception if not found

        InventoryDTO dto = new InventoryDTO();
        dto.setInventoryID(inventory.getInventoryID());
        dto.setQuantity(inventory.getQuantity());
        dto.setEntryTime(inventory.getEntryTime());
        dto.setExitTime(inventory.getExitTime());
        dto.setWarehouseID(inventory.getWarehouse().getWarehouseID());
        dto.setAssetID(inventory.getAsset().getAssetID());
        dto.setDelflag(inventory.isDelflag());

        return dto;
    }

    @Override
    public InventoryDTO create(InventoryDTO dto) {
        Inventory inventory = new Inventory();
        inventory.setQuantity(dto.getQuantity());
        inventory.setEntryTime(dto.getEntryTime());
        inventory.setExitTime(dto.getExitTime());
        inventory.setDelflag(dto.isDelflag());

        inventory.setWarehouse(new Warehouse());
        inventory.getWarehouse().setWarehouseID(dto.getWarehouseID());

        inventory.setAsset(new Asset());
        inventory.getAsset().setAssetID(dto.getAssetID());

        Inventory result = inventoryDAO.save(inventory);

        dto.setInventoryID(result.getInventoryID());

        return dto;
    }

    @Override
    public InventoryDTO update(Integer id, InventoryDTO dto) {
        Inventory inventory = inventoryDAO.findInventoryById(id)
                .orElseThrow(() -> new RuntimeException("Inventory not found")); //Return exception if not found

        //set data for Inventory
        inventory.setQuantity(dto.getQuantity());
        inventory.setEntryTime(dto.getEntryTime());
        inventory.setExitTime(dto.getExitTime());
        inventory.setDelflag(dto.isDelflag());

        inventory.setWarehouse(new Warehouse());
        inventory.getWarehouse().setWarehouseID(dto.getWarehouseID());

        inventory.setAsset(new Asset());
        inventory.getAsset().setAssetID(dto.getAssetID());

        Inventory result = inventoryDAO.save(inventory);

        dto.setInventoryID(result.getInventoryID());

        return dto;
    }

    @Override
    public boolean delete(Integer id) {
        Inventory inventory = inventoryDAO.findInventoryById(id)
                .orElseThrow(() -> new RuntimeException("Inventory not found")); //Return exception if not found
        inventory.setDelflag(false); //update delflag is false
        inventoryDAO.save(inventory);
        return true;
    }
}
