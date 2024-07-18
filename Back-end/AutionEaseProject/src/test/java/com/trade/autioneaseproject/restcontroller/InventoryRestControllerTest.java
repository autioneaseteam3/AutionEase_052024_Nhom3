package com.trade.autioneaseproject.restcontroller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.trade.autioneaseproject.request.InventoryDTO;
import com.trade.autioneaseproject.service.InventoryService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.time.LocalDate;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@SpringBootTest
@AutoConfigureMockMvc
public class InventoryRestControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private InventoryService inventoryService;

    private InventoryDTO inventoryRequest;
    private InventoryDTO inventoryResponse;
    private InventoryDTO inventoryUpdate;
    private List<InventoryDTO> inventoryList;
    private Date entryTime;
    private Date exitTime;

    @BeforeEach
    void initData(){
        Date entryTime = Date.from(LocalDate.of(2024, 7, 18).atStartOfDay().atZone(ZoneId.systemDefault()).toInstant());
        Date exitTime = Date.from(LocalDate.of(2024, 7, 28).atStartOfDay().atZone(ZoneId.systemDefault()).toInstant());
        inventoryRequest = InventoryDTO.builder()
                .quantity(10)
                .entryTime(entryTime)
                .exitTime(exitTime)
                .warehouseID(1)
                .assetID(1)
                .delflag(false)
                .build();

        // Init inventoryResponse
        inventoryResponse = InventoryDTO.builder()
                .inventoryID(1)
                .quantity(10)
                .entryTime(entryTime)
                .exitTime(exitTime)
                .warehouseID(1)
                .assetID(1)
                .delflag(false)
                .build();

        // Init inventoryUpdate
        inventoryUpdate = InventoryDTO.builder()
                .inventoryID(1)
                .quantity(25)
                .entryTime(entryTime)
                .exitTime(exitTime)
                .warehouseID(6)
                .assetID(3)
                .delflag(true)
                .build();

        // Init inventoryList
        inventoryList = Arrays.asList(
                InventoryDTO.builder()
                        .inventoryID(1)
                        .quantity(10)
                        .entryTime(entryTime)
                        .exitTime(exitTime)
                        .warehouseID(1)
                        .assetID(1)
                        .delflag(false)
                        .build(),

                InventoryDTO.builder()
                        .inventoryID(2)
                        .quantity(12)
                        .entryTime(entryTime)
                        .exitTime(exitTime)
                        .warehouseID(1)
                        .assetID(1)
                        .delflag(false)
                        .build()
        );
    }

    //Test create
    @Test
    void createInventory_validRequest_success() throws Exception {
        // GIVEN
        ObjectMapper objectMapper = new ObjectMapper();
        String content = objectMapper.writeValueAsString(inventoryRequest);

        when(inventoryService.create(any(InventoryDTO.class))).thenReturn(inventoryResponse);

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .post("/inventories/create")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(200))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Create inventory success"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.inventoryID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.quantity").value(10))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.warehouseID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.assetID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.delflag").value(false));
    }

    @Test
    void createInventory_invalidRequest_fail() throws Exception {
        // GIVEN
        String invalidContent = "";

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .post("/inventories/create")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(invalidContent))
                .andExpect(MockMvcResultMatchers.status().isBadRequest())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(400));
    }

    //Test getAll
    @Test
    void getAllInventories_success() throws Exception {
        // GIVEN
        Mockito.when(inventoryService.getAll()).thenReturn(inventoryList);

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/inventories/get-all")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(200))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Get all inventory success"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.length()").value(2))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data[0].inventoryID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data[0].quantity").value(10))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data[0].warehouseID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data[0].assetID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data[0].delflag").value(false))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data[1].inventoryID").value(2))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data[1].quantity").value(12))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data[1].warehouseID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data[1].assetID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data[1].delflag").value(false));
    }

    //Test get one
    @Test
    void getOneInventory_validId_success() throws Exception {
        // GIVEN
        Integer inventoryId = 1;

        Mockito.when(inventoryService.getOne(inventoryId)).thenReturn(inventoryResponse);

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/inventories/get-one/{id}", inventoryId)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(200))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Get inventory success"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.inventoryID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.quantity").value(10))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.warehouseID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.assetID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.delflag").value(false));
    }

    @Test
    void getOneInventory_invalidId_notFound() throws Exception {
        // GIVEN
        Integer invalidInventoryId = 99;

        Mockito.when(inventoryService.getOne(invalidInventoryId))
                .thenThrow(new RuntimeException("Inventory not found"));

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/inventories/get-one/{id}", invalidInventoryId)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isBadRequest())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(400))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Inventory not found"));
    }

    //Test update
    @Test
    void updateInventory_validRequest_success() throws Exception {
        // GIVEN
        Integer inventoryId = 1;
        ObjectMapper objectMapper = new ObjectMapper();
        String content = objectMapper.writeValueAsString(inventoryUpdate);

        Mockito.when(inventoryService.update(Mockito.eq(inventoryId), Mockito.any(InventoryDTO.class)))
                .thenReturn(inventoryUpdate);

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .put("/inventories/update/{id}", inventoryId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(200))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Update inventory success"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.inventoryID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.quantity").value(25))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.warehouseID").value(6))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.assetID").value(3))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.delflag").value(true));
    }

    @Test
    void updateInventory_invalidId_notFound() throws Exception {
        // GIVEN
        Integer invalidInventoryId = 99;
        ObjectMapper objectMapper = new ObjectMapper();
        String content = objectMapper.writeValueAsString(inventoryRequest);

        Mockito.when(inventoryService.update(Mockito.eq(invalidInventoryId), Mockito.any(InventoryDTO.class)))
                .thenThrow(new RuntimeException("Inventory not found"));

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .put("/inventories/update/{id}", invalidInventoryId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content))
                .andExpect(MockMvcResultMatchers.status().isBadRequest())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(400))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Inventory not found"));
    }

    @Test
    void updateInventory_invalidRequest_badRequest() throws Exception {
        // GIVEN
        Integer inventoryId = 3;
        String invalidContent = "";

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .put("/inventories/update/{id}", inventoryId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(invalidContent))
                .andExpect(MockMvcResultMatchers.status().isBadRequest())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(400));
    }

    //Test delete
    @Test
    void deleteInventory_validId_success() throws Exception {
        // GIVEN
        Integer inventoryId = 1;

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .delete("/inventories/delete/{id}", inventoryId)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(200))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Delete inventory success"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data").doesNotExist());
    }

    @Test
    void deleteInventory_invalidId_notFound() throws Exception {
        // GIVEN
        Integer invalidInventoryId = 99;

        Mockito.when(inventoryService.delete(invalidInventoryId))
                .thenThrow(new RuntimeException("Inventory not found"));

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .delete("/inventories/delete/{id}", invalidInventoryId)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isBadRequest())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(400))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Inventory not found"));
    }


}
