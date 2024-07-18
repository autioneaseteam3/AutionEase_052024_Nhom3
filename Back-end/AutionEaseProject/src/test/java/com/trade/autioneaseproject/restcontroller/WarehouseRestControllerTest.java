package com.trade.autioneaseproject.restcontroller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.trade.autioneaseproject.entity.Warehouse;
import com.trade.autioneaseproject.service.WarehouseService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.Arrays;
import java.util.List;

@SpringBootTest
@AutoConfigureMockMvc
public class WarehouseRestControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private WarehouseService warehouseService;

    private Warehouse warehouseRequest;
    private Warehouse warehouseUpdate;
    private Warehouse warehouseResponse;
    private List<Warehouse> warehouseList;


    @BeforeEach
    void initData(){
        warehouseRequest = Warehouse.builder()
                .location("102 pine")
                .delflag(false)
                .build();

        warehouseResponse = Warehouse.builder()
                .warehouseID(3)
                .location("102 pine")
                .delflag(false)
                .build();

        warehouseUpdate = Warehouse.builder()
                .warehouseID(3)
                .location("103 pine")
                .delflag(true)
                .build();

        warehouseList = Arrays.asList(
                Warehouse.builder()
                        .warehouseID(1)
                        .location("Warehouse 1")
                        .delflag(false)
                        .build(),
                Warehouse.builder()
                        .warehouseID(2)
                        .location("Warehouse 2")
                        .delflag(false)
                        .build()
        );
    }

    //Test create
    @Test
    void createWarehouse_validRequest_success() throws Exception {
        //GIVEN
        ObjectMapper objectMapper = new ObjectMapper();
        String content = objectMapper.writeValueAsString(warehouseRequest);

        Mockito.when(warehouseService.create(ArgumentMatchers.any()))
                        .thenReturn(warehouseResponse);

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .post("/warehouses/create")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(200))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Create warehouse success"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.warehouseID").value(3))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.location").value("102 pine"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.delflag").value(false));
    }

    @Test
    void createWarehouse_invalidRequest_fail() throws Exception {
        // GIVEN
        String invalidContent = "";

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .post("/warehouses/create")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(invalidContent))
                .andExpect(MockMvcResultMatchers.status().isBadRequest())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(400));
    }


    //Test getAll
    @Test
    void getAllWarehouses_success() throws Exception {
        // GIVEN
        Mockito.when(warehouseService.getAll())
                .thenReturn(warehouseList);

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/warehouses/get-all")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(200))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Get all warehouse success"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.length()").value(2))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data[0].warehouseID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data[0].location").value("Warehouse 1"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data[1].warehouseID").value(2))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data[1].location").value("Warehouse 2"));
    }

    //Test get one
    @Test
    void getOneWarehouse_validId_success() throws Exception {
        // GIVEN
        Integer warehouseId = 3;

        Mockito.when(warehouseService.getOne(warehouseId))
                .thenReturn(warehouseResponse);

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/warehouses/get-one/{id}", warehouseId)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(200))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Get warehouse success"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.warehouseID").value(3))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.location").value("102 pine"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.delflag").value(false));
    }

    @Test
    void getOneWarehouse_invalidId_notFound() throws Exception {
        // GIVEN
        Integer invalidWarehouseId = 99;

        Mockito.when(warehouseService.getOne(invalidWarehouseId))
                .thenThrow(new RuntimeException("Warehouse not found"));

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/warehouses/get-one/{id}", invalidWarehouseId)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isBadRequest())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(400))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Warehouse not found"));
    }

    //Test update
    @Test
    void updateWarehouse_validRequest_success() throws Exception {
        // GIVEN
        Integer warehouseId = 3;
        ObjectMapper objectMapper = new ObjectMapper();
        String content = objectMapper.writeValueAsString(warehouseUpdate);

        Mockito.when(warehouseService.update(Mockito.eq(warehouseId), Mockito.any(Warehouse.class)))
                .thenReturn(warehouseUpdate);

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .put("/warehouses/update/{id}", warehouseId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(200))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Update warehouse success"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.warehouseID").value(3))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.location").value("103 pine"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.delflag").value(true));
    }

    @Test
    void updateWarehouse_invalidId_notFound() throws Exception {
        // GIVEN
        Integer invalidWarehouseId = 99;
        ObjectMapper objectMapper = new ObjectMapper();
        String content = objectMapper.writeValueAsString(warehouseRequest);

        Mockito.when(warehouseService.update(Mockito.eq(invalidWarehouseId), Mockito.any(Warehouse.class)))
                .thenThrow(new RuntimeException("Warehouse not found"));

        /// WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .put("/warehouses/update/{id}", invalidWarehouseId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content))
                .andExpect(MockMvcResultMatchers.status().isBadRequest())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(400))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Warehouse not found"));
    }

    @Test
    void updateWarehouse_invalidRequest_badRequest() throws Exception {
        // GIVEN
        Integer warehouseId = 3;
        String invalidContent = "";

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .put("/warehouses/update/{id}", warehouseId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(invalidContent))
                .andExpect(MockMvcResultMatchers.status().isBadRequest())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(400));
    }

    //Test delete

    @Test
    void deleteWarehouse_validId_success() throws Exception {
        // GIVEN
        Integer warehouseId = 1;

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .delete("/warehouses/delete/{id}", warehouseId)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(200))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Delete warehouse success"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data").doesNotExist());
    }

    @Test
    void deleteWarehouse_invalidId_notFound() throws Exception {
        // GIVEN
        Integer invalidWarehouseId = 99;

        Mockito.when(warehouseService.delete(invalidWarehouseId))
                .thenThrow(new RuntimeException("Warehouse not found"));

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .delete("/warehouses/delete/{id}", invalidWarehouseId)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isBadRequest())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(400))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Warehouse not found"));
    }
}
