package com.trade.autioneaseproject.service.impl;

import com.trade.autioneaseproject.DAO.WarehouseDAO;
import com.trade.autioneaseproject.entity.Warehouse;
import com.trade.autioneaseproject.service.WarehouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WarehouseServiceImpl implements WarehouseService {

    @Autowired
    private WarehouseDAO warehouseDAO;
    @Override
    public List<Warehouse> getAll() {
        return warehouseDAO.getAll();
    }

    @Override
    public Warehouse getOne(Integer id) {
        return warehouseDAO.getOne(id);
    }

    @Override
    public Warehouse create(Warehouse warehouse) {
        return this.warehouseDAO.save(warehouse);
    }

    @Override
    public Warehouse update(Integer id, Warehouse warehouse) {
        Warehouse existingWarehouse = warehouseDAO.getOne(id);

        existingWarehouse.setLocation(warehouse.getLocation());
        existingWarehouse.setDelflag(warehouse.getDelflag());

        return this.warehouseDAO.save(existingWarehouse);
    }

    @Override
    public boolean delete(Integer id) {
        try {
            Warehouse warehouse = warehouseDAO.getOne(id);
            warehouse.setDelflag(true);
            warehouseDAO.save(warehouse);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }
}
