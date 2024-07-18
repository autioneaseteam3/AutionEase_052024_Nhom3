package com.trade.autioneaseproject.restcontroller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.trade.autioneaseproject.request.AuctionItemDTO;
import com.trade.autioneaseproject.service.AuctionItemService;
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

import java.util.Arrays;
import java.util.List;

@SpringBootTest
@AutoConfigureMockMvc
public class AuctionItemRestControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private AuctionItemService auctionItemService;

    private AuctionItemDTO auctionItemRequest;
    private AuctionItemDTO auctionItemResponse;
    private AuctionItemDTO auctionItemUpdate;
    private List<AuctionItemDTO> auctionItemList;

    @BeforeEach
    void initData() {
        auctionItemRequest = AuctionItemDTO.builder()
                .auctionSessionID(1)
                .assetID(1)
                .startingBids(1000.0f)
                .bidIncrement(50.0f)
                .delflag(false)
                .build();

        auctionItemResponse = AuctionItemDTO.builder()
                .auctionItemID(1)
                .auctionSessionID(1)
                .assetID(1)
                .startingBids(1000.0f)
                .bidIncrement(50.0f)
                .delflag(false)
                .build();

        auctionItemUpdate = AuctionItemDTO.builder()
                .auctionItemID(1)
                .auctionSessionID(1)
                .assetID(1)
                .startingBids(1500.0f)
                .bidIncrement(100.0f)
                .delflag(true)
                .build();

        auctionItemList = Arrays.asList(
                AuctionItemDTO.builder()
                        .auctionItemID(1)
                        .auctionSessionID(1)
                        .assetID(1)
                        .startingBids(1000.0f)
                        .bidIncrement(50.0f)
                        .delflag(false)
                        .build(),
                AuctionItemDTO.builder()
                        .auctionItemID(2)
                        .auctionSessionID(2)
                        .assetID(2)
                        .startingBids(2000.0f)
                        .bidIncrement(100.0f)
                        .delflag(false)
                        .build()
        );
    }

    //Test create
    @Test
    void createAuctionItem_validRequest_success() throws Exception {
        // GIVEN
        ObjectMapper objectMapper = new ObjectMapper();
        String content = objectMapper.writeValueAsString(auctionItemRequest);

        Mockito.when(auctionItemService.create(Mockito.any(AuctionItemDTO.class)))
                .thenReturn(auctionItemResponse);

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .post("/auction-item/create")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(200))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Create auction item success"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.auctionItemID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.auctionSessionID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.assetID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.startingBids").value(1000.0))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.bidIncrement").value(50.0))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.delflag").value(false));
    }

    @Test
    void createAuctionItem_invalidRequest_fail() throws Exception {
        // GIVEN
        String invalidContent = "";

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .post("/auction-item/create")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(invalidContent))
                .andExpect(MockMvcResultMatchers.status().isBadRequest())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(400));
    }

    //Test getAll
    @Test
    void getAllAuctionItems_success() throws Exception {
        // GIVEN
        Mockito.when(auctionItemService.getAll()).thenReturn(auctionItemList);

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/auction-item/get-all")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(200))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Get all auction item success"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.length()").value(2))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data[0].auctionItemID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data[0].auctionSessionID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data[0].assetID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data[0].startingBids").value(1000.0))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data[0].bidIncrement").value(50.0))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data[0].delflag").value(false))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data[1].auctionItemID").value(2))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data[1].auctionSessionID").value(2))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data[1].assetID").value(2))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data[1].startingBids").value(2000.0))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data[1].bidIncrement").value(100.0))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data[1].delflag").value(false));
    }

    //Test get one
    @Test
    void getOneAuctionItem_validId_success() throws Exception {
        // GIVEN
        Integer auctionItemId = 1;

        Mockito.when(auctionItemService.getOne(auctionItemId)).thenReturn(auctionItemResponse);

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/auction-item/get-one/{id}", auctionItemId)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(200))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Get auction item success"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.auctionItemID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.auctionSessionID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.assetID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.startingBids").value(1000.0))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.bidIncrement").value(50.0))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.delflag").value(false));
    }

    @Test
    void getOneAuctionItem_invalidId_notFound() throws Exception {
        // GIVEN
        Integer invalidAuctionItemId = 99;

        Mockito.when(auctionItemService.getOne(invalidAuctionItemId))
                .thenThrow(new RuntimeException("Auction item not found"));

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/auction-item/get-one/{id}", invalidAuctionItemId)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isBadRequest())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(400))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Auction item not found"));
    }

    //Test update
    @Test
    void updateAuctionItem_validRequest_success() throws Exception {
        // GIVEN
        Integer auctionItemId = 1;
        ObjectMapper objectMapper = new ObjectMapper();
        String content = objectMapper.writeValueAsString(auctionItemUpdate);

        Mockito.when(auctionItemService.update(Mockito.eq(auctionItemId), Mockito.any(AuctionItemDTO.class)))
                .thenReturn(auctionItemUpdate);

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .put("/auction-item/update/{id}", auctionItemId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(200))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Update auction item success"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.auctionItemID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.auctionSessionID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.assetID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.startingBids").value(1500.0))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.bidIncrement").value(100.0))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.delflag").value(true));
    }

    @Test
    void updateAuctionItem_invalidId_notFound() throws Exception {
        // GIVEN
        Integer invalidAuctionItemId = 99;
        ObjectMapper objectMapper = new ObjectMapper();
        String content = objectMapper.writeValueAsString(auctionItemRequest);

        Mockito.when(auctionItemService.update(Mockito.eq(invalidAuctionItemId), Mockito.any(AuctionItemDTO.class)))
                .thenThrow(new RuntimeException("Auction item not found"));

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .put("/auction-item/update/{id}", invalidAuctionItemId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content))
                .andExpect(MockMvcResultMatchers.status().isBadRequest())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(400))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Auction item not found"));
    }

    @Test
    void updateAuctionItem_invalidRequest_badRequest() throws Exception {
        // GIVEN
        Integer auctionItemId = 3;
        String invalidContent = "";

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .put("/auction-item/update/{id}", auctionItemId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(invalidContent))
                .andExpect(MockMvcResultMatchers.status().isBadRequest())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(400));
    }

    //Test delete
    @Test
    void deleteAuctionItem_validId_success() throws Exception {
        // GIVEN
        Integer auctionItemId = 1;

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .delete("/auction-item/delete/{id}", auctionItemId)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(200))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Delete auction item success"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data").doesNotExist());
    }

    @Test
    void deleteAuctionItem_invalidId_notFound() throws Exception {
        // GIVEN
        Integer invalidAuctionItemId = 99;

        Mockito.when(auctionItemService.delete(invalidAuctionItemId))
                .thenThrow(new RuntimeException("Auction item not found"));

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .delete("/auction-item/delete/{id}", invalidAuctionItemId)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isBadRequest())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(400))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Auction item not found"));
    }

}
