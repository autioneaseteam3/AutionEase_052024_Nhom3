package com.trade.autioneaseproject.restcontroller;


import com.trade.autioneaseproject.DAO.InventoryDAO;
import com.trade.autioneaseproject.entity.Inventory;
import com.trade.autioneaseproject.request.ApiResponse;
import com.trade.autioneaseproject.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/inventories")
public class InventoryRestController {

    @Autowired
    private InventoryService inventoryService;

    @GetMapping("/get-all")
    public ApiResponse<List<Inventory>> getAll(){
        ApiResponse<List<Inventory>> apiResponse = new ApiResponse<>();

        List<Inventory> inventories = inventoryService.getAll();

        if (inventories != null){
            apiResponse.setStatus(HttpStatus.OK.value());
            apiResponse.setMessage("Get all inventory success");
            apiResponse.setData(inventories);
        } else {
            apiResponse.setStatus(HttpStatus.BAD_REQUEST.value());
            apiResponse.setMessage("Get all inventory failed");
            apiResponse.setData(null);
        }
        return apiResponse;
    }

    @GetMapping("/get-one/{id}")
    public ApiResponse<Inventory> getOne(@PathVariable("id") Integer id){
        ApiResponse<Inventory> apiResponse = new ApiResponse<>();

        Inventory inventory = inventoryService.getOne(id);

        if (inventory != null){
            apiResponse.setStatus(HttpStatus.OK.value());
            apiResponse.setMessage("Get inventory success");
            apiResponse.setData(inventory);
        } else {
            apiResponse.setStatus(HttpStatus.BAD_REQUEST.value());
            apiResponse.setMessage("Get all inventory failed");
            apiResponse.setData(null);
        }
        return apiResponse;
    }

    @PostMapping("/create")
    public ApiResponse<Inventory> create(@RequestBody Inventory request){
        ApiResponse<Inventory> apiResponse = new ApiResponse<>();
        Inventory inventory = inventoryService.create(request);

        if (inventory != null){
            apiResponse.setStatus(HttpStatus.OK.value());
            apiResponse.setMessage("Create inventory success");
            apiResponse.setData(inventory);
        } else {
            apiResponse.setStatus(HttpStatus.BAD_REQUEST.value());
            apiResponse.setMessage("Create inventory failed");
            apiResponse.setData(null);
        }
        return apiResponse;
    }

    @PutMapping("update/{id}")
    public ApiResponse<Inventory> update(@PathVariable("id") Integer id, @RequestBody Inventory request){
        ApiResponse<Inventory> apiResponse = new ApiResponse<>();
        Inventory inventory = inventoryService.update(id, request);

        if (inventory != null){
            apiResponse.setStatus(HttpStatus.OK.value());
            apiResponse.setMessage("Update inventory success");
            apiResponse.setData(inventory);
        } else {
            apiResponse.setStatus(HttpStatus.BAD_REQUEST.value());
            apiResponse.setMessage("Update inventory failed");
            apiResponse.setData(null);
        }
        return apiResponse;
    }

    @DeleteMapping("/delete/{id}")
    public ApiResponse<Boolean> delete(@PathVariable("id") Integer id){
        ApiResponse<Boolean> apiResponse = new ApiResponse<>();
        boolean isDeleted = inventoryService.delete(id);

        if (isDeleted){
            apiResponse.setStatus(HttpStatus.OK.value());
            apiResponse.setMessage("Delete inventory success");
            apiResponse.setData(null);
        } else {
            apiResponse.setStatus(HttpStatus.BAD_REQUEST.value());
            apiResponse.setMessage("Delete inventory failed");
            apiResponse.setData(null);
        }
        return apiResponse;
    }
}
