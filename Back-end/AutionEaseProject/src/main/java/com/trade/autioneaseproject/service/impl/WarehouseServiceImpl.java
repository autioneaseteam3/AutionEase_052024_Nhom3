package com.trade.autioneaseproject.service.impl;

import com.trade.autioneaseproject.DAO.WarehouseDAO;
import com.trade.autioneaseproject.entity.Warehouse;
import com.trade.autioneaseproject.services.WarehouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WarehouseServiceImpl implements WarehouseService {

    @Autowired
    private WarehouseDAO warehouseDAO;
    @Override
    public List<Warehouse> getAll() {
        return warehouseDAO.findAll();
    }

    @Override
    public Warehouse getOne(Integer id) {
        return warehouseDAO.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
    }

    @Override
    public Warehouse create(Warehouse warehouse) {
        return this.warehouseDAO.save(warehouse);
    }

    @Override
    public Warehouse update(Integer id, Warehouse warehouse) {
        warehouse.setWarehouseId(id);
        return this.warehouseDAO.save(warehouse);
    }

    @Override
    public boolean delete(Integer id) {
        try {
            this.warehouseDAO.deleteById(id);
            return true;
        } catch (Exception e){
            e.printStackTrace();
        }
        return false;
    }
}
