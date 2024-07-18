package com.trade.autioneaseproject.restcontroller;


import com.fasterxml.jackson.databind.ObjectMapper;
import com.trade.autioneaseproject.entity.Event;
import com.trade.autioneaseproject.request.ApiResponse;
import com.trade.autioneaseproject.restcontroller.EventRestController;
import com.trade.autioneaseproject.service.EventService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@WebMvcTest(EventRestController.class)
public class EventRestControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private EventService eventService;

    @InjectMocks
    private EventRestController eventRestController;

    private ObjectMapper objectMapper;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
        objectMapper = new ObjectMapper();
    }

    @Test
    public void testFindAllEvents() throws Exception {
        Event event1 = new Event(1, "Event 1", new Date(2024,07,17), new Date(2024,07,18), "Active", "Description 1", true);
        Event event2 = new Event(2, "Event 2", new Date(2024,07,17), new Date(2024,07,18), "Inactive", "Description 2", true);

        List<Event> events = Arrays.asList(event1, event2);

        when(eventService.findAll()).thenReturn(events);

        mockMvc.perform(MockMvcRequestBuilders.get("/rest/event/findAll"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.size()").value(events.size()));
    }

    @Test
    public void testFindOneEvent() throws Exception {
        Event event = new Event(1, "Event 1",  new Date(2024,07,17), new Date(2024,07,18), "Active", "Description 1", true);

        when(eventService.findById(1)).thenReturn(event);

        mockMvc.perform(MockMvcRequestBuilders.get("/rest/event/findOne/1"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.eventName").value(event.getEventName()));
    }

    @Test
    public void testCreateEvent() throws Exception {
        Event event = new Event(1, "New Event",  new Date(2024,07,17), new Date(2024,07,18), "Active", "New Description", true);

        when(eventService.isEventNameUnique(anyString())).thenReturn(true);
        when(eventService.create(any(Event.class))).thenReturn(event);

        String jsonEvent = objectMapper.writeValueAsString(event);

        mockMvc.perform(MockMvcRequestBuilders.post("/rest/event/create")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(jsonEvent))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Create event success"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.eventName").value(event.getEventName()));
    }

    @Test
    public void testUpdateEvent() throws Exception {
        Event existingEvent = new Event(1, "Existing Event",  new Date(2024,07,17), new Date(2024,07,18), "Active", "Existing Description", true);
        Event updatedEvent = new Event(1, "Updated Event",  new Date(2024,07,17), new Date(2024,07,18), "Inactive", "Updated Description", true);

        when(eventService.findById(1)).thenReturn(existingEvent);
        when(eventService.update(eq(1), any(Event.class))).thenReturn(updatedEvent);

        String jsonEvent = objectMapper.writeValueAsString(updatedEvent);

        mockMvc.perform(MockMvcRequestBuilders.put("/rest/event/update/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(jsonEvent))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Update event success"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.eventName").value(updatedEvent.getEventName()));
    }

    @Test
    public void testDeleteEvent() throws Exception {
        Event event = new Event(1, "Event to delete",  new Date(2024,07,17), new Date(2024,07,18), "Active", "Description", true);

        when(eventService.findById(1)).thenReturn(event);
        when(eventService.update(eq(1), any(Event.class))).thenReturn(event);

        mockMvc.perform(MockMvcRequestBuilders.delete("/rest/event/delete/1"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("Event marked as deleted"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.data.eventName").value(event.getEventName()));
    }
}