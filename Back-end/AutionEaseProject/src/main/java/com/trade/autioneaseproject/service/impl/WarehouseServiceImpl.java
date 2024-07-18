package com.trade.autioneaseproject.service.impl;

import com.trade.autioneaseproject.dao.WarehouseDAO;
import com.trade.autioneaseproject.entity.Warehouse;
import com.trade.autioneaseproject.service.WarehouseService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class WarehouseServiceImpl implements WarehouseService {

    @Autowired
    private WarehouseDAO warehouseDAO;
    @Override
    public List<Warehouse> getAll() {
        return warehouseDAO.getAll();
    }

    @Override
    public Warehouse getOne(Integer id) {
        return warehouseDAO.findWarehouseById(id)
                .orElseThrow(() -> new RuntimeException("Warehouse not found")); //Return exception if not found
    }

    @Override
    public Warehouse create(Warehouse warehouse) {
        log.info("Controller");
        return this.warehouseDAO.save(warehouse);
    }

    @Override
    public Warehouse update(Integer id, Warehouse warehouse) {
        Warehouse existingWarehouse = warehouseDAO.findWarehouseById(id)
                        .orElseThrow(() -> new RuntimeException("Warehouse not found")); //Return exception if not found

        existingWarehouse.setLocation(warehouse.getLocation());
        existingWarehouse.setDelflag(warehouse.getDelflag());

        return this.warehouseDAO.save(existingWarehouse);
    }

    @Override
    public boolean delete(Integer id) {
        Warehouse warehouse = warehouseDAO.findWarehouseById(id)
                .orElseThrow(() -> new RuntimeException("Warehouse not found")); //Return exception if not found
        warehouse.setDelflag(false); //update delflag is false
        warehouseDAO.save(warehouse);
        return true;
    }
}
