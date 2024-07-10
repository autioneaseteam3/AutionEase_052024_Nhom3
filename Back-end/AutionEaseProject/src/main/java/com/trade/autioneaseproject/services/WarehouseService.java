package com.trade.autioneaseproject.services;

import com.trade.autioneaseproject.entity.Warehouse;

import java.util.List;

public interface WarehouseService {
    List<Warehouse> getAll();
    Warehouse getOne(Integer id);
    Warehouse create(Warehouse warehouse);
    Warehouse update(Integer id, Warehouse warehouse);
    boolean delete(Integer id);
}
