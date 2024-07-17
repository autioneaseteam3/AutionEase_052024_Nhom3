package com.trade.autioneaseproject.restcontroller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.trade.autioneaseproject.entity.AuctionSession;
import com.trade.autioneaseproject.entity.Event;
import com.trade.autioneaseproject.request.AuctionSessionDTO;
import com.trade.autioneaseproject.service.AuctionSessionService;
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
import java.util.Arrays;
import java.util.Date;
import java.util.List;

@SpringBootTest
@AutoConfigureMockMvc
public class AuctionSessionRestControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private AuctionSessionService auctionSessionService;

    private AuctionSessionDTO auctionSessionRequest;
    private AuctionSessionDTO auctionSessionResponse;
    private AuctionSessionDTO auctionSessionUpdate;
    private List<AuctionSessionDTO> auctionSessionList;
    private Date startTime;
    private Date endTime;
    @BeforeEach
    void initData(){
        startTime = Date.from(LocalDate.of(2024, 7, 18).atStartOfDay().atZone(ZoneId.systemDefault()).toInstant());
        endTime = Date.from(LocalDate.of(2024, 7, 20).atStartOfDay().atZone(ZoneId.systemDefault()).toInstant());

        auctionSessionRequest = AuctionSessionDTO.builder()
                .startTime(startTime)
                .endTime(endTime)
                .eventID(1)
                .delflag(false)
                .build();

        auctionSessionResponse = AuctionSessionDTO.builder()
                .auctionSessionID(1)
                .startTime(startTime)
                .endTime(endTime)
                .eventID(1)
                .delflag(false)
                .build();

        auctionSessionUpdate = AuctionSessionDTO.builder()
                .auctionSessionID(1)
                .startTime(startTime)
                .endTime(endTime)
                .eventID(1)
                .delflag(true)
                .build();

        auctionSessionList = Arrays.asList(
                AuctionSessionDTO.builder()
                        .auctionSessionID(1)
                        .startTime(startTime)
                        .endTime(endTime)
                        .eventID(1)
                        .delflag(false)
                        .build(),

                AuctionSessionDTO.builder()
                        .auctionSessionID(2)
                        .startTime(startTime)
                        .endTime(endTime)
                        .eventID(1)
                        .delflag(false)
                        .build()
        );
    }

    //test create
    @Test
    void createAuctionSession_validRequest_success() throws Exception {
        // GIVEN
        ObjectMapper objectMapper = new ObjectMapper();
        String content = objectMapper.writeValueAsString(auctionSessionRequest);

        Mockito.when(auctionSessionService.create(Mockito.any(AuctionSessionDTO.class)))
                .thenReturn(auctionSessionResponse);

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .post("/auction-session/create")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(200))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Create auction session success"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.auctionSessionID").value(1))
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

    //test get all
    @Test
    void getAllAuctionSessions_success() throws Exception {
        // GIVEN
        Mockito.when(auctionSessionService.getAll())
                .thenReturn(auctionSessionList);

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/auction-session/get-all")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(200))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Get all auction session success"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.length()").value(2))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data[0].auctionSessionID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data[0].eventID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data[0].delflag").value(false))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data[1].auctionSessionID").value(2))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data[1].eventID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data[1].delflag").value(false));
    }

    //test get one
    @Test
    void getOneAuctionSession_validId_success() throws Exception {
        // GIVEN
        Integer auctionSessionId = 1;

        Mockito.when(auctionSessionService.getOne(auctionSessionId))
                .thenReturn(auctionSessionResponse);

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/auction-session/get-one/{id}", auctionSessionId)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(200))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Get auction session success"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.auctionSessionID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.eventID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.delflag").value(false));
    }

    @Test
    void getOneAuctionSession_invalidId_notFound() throws Exception {
        // GIVEN
        Integer invalidAuctionSessionId = 99;

        Mockito.when(auctionSessionService.getOne(invalidAuctionSessionId))
                .thenThrow(new RuntimeException("Auction session not found"));

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .get("/auction-session/get-one/{id}", invalidAuctionSessionId)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isBadRequest())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(400))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Auction session not found"));
    }

    //test update
    @Test
    void updateAuctionSession_validRequest_success() throws Exception {
        // GIVEN
        Integer auctionSessionId = 1;
        ObjectMapper objectMapper = new ObjectMapper();
        String content = objectMapper.writeValueAsString(auctionSessionUpdate);

        Mockito.when(auctionSessionService.update(Mockito.eq(auctionSessionId), Mockito.any(AuctionSessionDTO.class)))
                .thenReturn(auctionSessionUpdate);

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .put("/auction-session/update/{id}", auctionSessionId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(200))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Update auction session success"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.auctionSessionID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.eventID").value(1))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.delflag").value(true));
    }

    @Test
    void updateAuctionSession_invalidId_notFound() throws Exception {
        // GIVEN
        Integer invalidAuctionSessionId = 99;
        ObjectMapper objectMapper = new ObjectMapper();
        String content = objectMapper.writeValueAsString(auctionSessionRequest);

        Mockito.when(auctionSessionService.update(Mockito.eq(invalidAuctionSessionId), Mockito.any(AuctionSessionDTO.class)))
                .thenThrow(new RuntimeException("Auction session not found"));

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .put("/auction-session/update/{id}", invalidAuctionSessionId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(content))
                .andExpect(MockMvcResultMatchers.status().isBadRequest())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(400))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Auction session not found"));
    }

    @Test
    void updateAuctionSession_invalidRequest_badRequest() throws Exception {
        // GIVEN
        Integer auctionSessionId = 1;
        String invalidContent = "";

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .put("/auction-session/update/{id}", auctionSessionId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(invalidContent))
                .andExpect(MockMvcResultMatchers.status().isBadRequest())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(400));
    }

    //test delete
    @Test
    void deleteAuctionSession_validId_success() throws Exception {
        // GIVEN
        Integer auctionSessionId = 1;

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .delete("/auction-session/delete/{id}", auctionSessionId)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(200))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Delete auction session success"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data").doesNotExist());
    }

    @Test
    void deleteAuctionSession_invalidId_notFound() throws Exception {
        // GIVEN
        Integer invalidAuctionSessionId = 99;

        Mockito.when(auctionSessionService.delete(invalidAuctionSessionId))
                .thenThrow(new RuntimeException("Auction session not found"));

        // WHEN, THEN
        mockMvc.perform(MockMvcRequestBuilders
                        .delete("/auction-session/delete/{id}", invalidAuctionSessionId)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isBadRequest())
                .andExpect(MockMvcResultMatchers.jsonPath("$.status").value(400))
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Auction session not found"));
    }

}
