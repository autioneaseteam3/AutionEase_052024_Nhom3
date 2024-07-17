package com.trade.autioneaseproject.restcontroller;


import com.trade.autioneaseproject.dao.InventoryDAO;
import com.trade.autioneaseproject.entity.Inventory;
import com.trade.autioneaseproject.request.ApiResponse;
import com.trade.autioneaseproject.request.InventoryDTO;
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
    public ApiResponse<List<InventoryDTO>> getAll(){
        ApiResponse<List<InventoryDTO>> apiResponse = new ApiResponse<>();

        List<InventoryDTO> inventories = inventoryService.getAll();

        //set api
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
    public ApiResponse<InventoryDTO> getOne(@PathVariable("id") Integer id){
        ApiResponse<InventoryDTO> apiResponse = new ApiResponse<>();

        InventoryDTO inventory = inventoryService.getOne(id);

        //set api
        apiResponse.setStatus(HttpStatus.OK.value());
        apiResponse.setMessage("Get inventory success");
        apiResponse.setData(inventory);

        return apiResponse;
    }

    @PostMapping("/create")
    public ApiResponse<InventoryDTO> create(@RequestBody InventoryDTO request){
        ApiResponse<InventoryDTO> apiResponse = new ApiResponse<>();

        //create inventory from request body
        InventoryDTO inventory = inventoryService.create(request);

        //set api
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
    public ApiResponse<InventoryDTO> update(@PathVariable("id") Integer id, @RequestBody InventoryDTO request){
        ApiResponse<InventoryDTO> apiResponse = new ApiResponse<>();

        //update inventory from request body
        InventoryDTO inventory = inventoryService.update(id, request);

        //set api
        apiResponse.setStatus(HttpStatus.OK.value());
        apiResponse.setMessage("Update inventory success");
        apiResponse.setData(inventory);

        return apiResponse;
    }

    @DeleteMapping("/delete/{id}")
    public ApiResponse<Boolean> delete(@PathVariable("id") Integer id){
        ApiResponse<Boolean> apiResponse = new ApiResponse<>();
        inventoryService.delete(id);

        //set api
        apiResponse.setStatus(HttpStatus.OK.value());
        apiResponse.setMessage("Delete inventory success");
        apiResponse.setData(null);

        return apiResponse;
    }
}
