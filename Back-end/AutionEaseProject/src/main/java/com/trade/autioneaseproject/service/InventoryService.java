package com.trade.autioneaseproject.service;

import com.trade.autioneaseproject.entity.Inventory;

import java.util.List;

public interface InventoryService {
    List<Inventory> getAll();
    Inventory getOne(Integer id);
    Inventory create(Inventory inventory);
    Inventory update(Integer id, Inventory inventory);
    boolean delete(Integer id);
}
