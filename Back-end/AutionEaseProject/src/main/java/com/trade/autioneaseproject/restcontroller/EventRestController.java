package com.trade.autioneaseproject.restcontroller;

import com.trade.autioneaseproject.dao.EventDAO;
import com.trade.autioneaseproject.entity.Event;
import com.trade.autioneaseproject.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/rest/event")
public class EventRestController {

    @Autowired
    EventDAO eventDAO;

    @Autowired
    EventService eventService;

    @GetMapping
    public List<Event> findAll(){
        return eventService.findAll();
    }

    @GetMapping("{eventID}")
    public Event findOne(@PathVariable("eventID") Integer eventID){
        return eventService.findById(eventID);
    }

    @PostMapping()
    public  Event create(@RequestBody Event event){
        return  eventService.create(event);
    }

    @PutMapping("{eventID}")
    public Event update(@PathVariable("eventID") Integer eventID,@RequestBody Event event){
        return eventService.update(event);
    }

   @DeleteMapping("{eventID}")
    public void deleteAccount(@PathVariable("eventID") Integer eventID) {
        eventService.delete(eventID);
    }
}
