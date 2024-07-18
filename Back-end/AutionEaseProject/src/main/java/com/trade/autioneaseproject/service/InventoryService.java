package com.trade.autioneaseproject.service;

import com.trade.autioneaseproject.entity.Inventory;
import com.trade.autioneaseproject.request.InventoryDTO;

import java.util.List;

public interface InventoryService {
    List<InventoryDTO> getAll();
    InventoryDTO getOne(Integer id);
    InventoryDTO create(InventoryDTO request);
    InventoryDTO update(Integer id, InventoryDTO request);
    boolean delete(Integer id);
}
