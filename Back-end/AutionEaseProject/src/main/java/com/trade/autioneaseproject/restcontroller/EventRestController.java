package com.trade.autioneaseproject.restcontroller;

import com.trade.autioneaseproject.entity.Event;
import com.trade.autioneaseproject.request.ApiResponse;
import com.trade.autioneaseproject.service.EventService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/rest/event")
public class EventRestController {

    @Autowired
    private EventService eventService;

    @GetMapping
    public List<Event> findAll() {
        return eventService.findAll();
    }

    @GetMapping("{eventID}")
    public ApiResponse<Event> findOne(@PathVariable("eventID") Integer eventID) {
        ApiResponse<Event> response = new ApiResponse<>();
        Event event = eventService.findById(eventID);
        if (event != null) {
            response.setStatus(HttpStatus.OK.value());
            response.setMessage("Get one success");
            response.setData(event);
        } else {
            response.setStatus(HttpStatus.BAD_REQUEST.value());
            response.setMessage("Event not found");
            response.setData(null);
        }
        return response;
    }

    @PostMapping
    public ApiResponse<Event> create(@Valid @RequestBody Event event) {
        ApiResponse<Event> response = new ApiResponse<>();
        boolean isUnique = eventService.isEventNameUnique(event.getEventName());

        if (isUnique) {
            Event createdEvent = eventService.create(event);
            response.setStatus(HttpStatus.OK.value());
            response.setMessage("Create event success");
            response.setData(createdEvent);
        } else {
            response.setStatus(HttpStatus.BAD_REQUEST.value());
            response.setMessage("Event name already exists");
            response.setData(null);
        }

        return response;
    }

    @PutMapping("{eventID}")
    public ApiResponse<Event> updateEvent(@PathVariable("eventID") Integer eventID, @Valid @RequestBody Event event) {
        ApiResponse<Event> response = new ApiResponse<>();
        Event existingEvent = eventService.findById(eventID);

        if (existingEvent != null) {
            // Update the fields of the existing event
            existingEvent.setEventName(event.getEventName());
            existingEvent.setStartTime(event.getStartTime());
            existingEvent.setEndTime(event.getEndTime());
            existingEvent.setState(event.getState());
            existingEvent.setDescription(event.getDescription());
            existingEvent.setDelflag(event.getDelflag());

            // Save the updated event
            Event updatedEvent = eventService.update(eventID, existingEvent);

            response.setStatus(HttpStatus.OK.value());
            response.setMessage("Update event success");
            response.setData(updatedEvent);
        } else {
            response.setStatus(HttpStatus.BAD_REQUEST.value());
            response.setMessage("Event not found");
            response.setData(null);
        }
        return response;
    }

    @DeleteMapping("{eventID}")
    public ApiResponse<Event> deleteEvent(@PathVariable("eventID") Integer eventID) {
        ApiResponse<Event> response = new ApiResponse<>();
        Event event = eventService.findById(eventID);

        if (event != null) {
            event.setDelflag(false);
            Event updatedEvent = eventService.update(eventID, event);

            response.setStatus(HttpStatus.OK.value());
            response.setMessage("Event marked as deleted");
            response.setData(updatedEvent);
        } else {
            response.setStatus(HttpStatus.BAD_REQUEST.value());
            response.setMessage("Event not found or delete failed");
            response.setData(null);
        }
        return response;
    }
}
