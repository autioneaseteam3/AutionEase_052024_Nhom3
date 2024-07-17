package com.trade.autioneaseproject.service.impl;

import com.trade.autioneaseproject.dao.EventDAO;
import com.trade.autioneaseproject.entity.Event;
import com.trade.autioneaseproject.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EventServiceImpl implements EventService {

    @Autowired
    EventDAO eventDAO;


    @Override
    public List<Event> findAll() {
        return eventDAO.findAll();
    }

    public Event findById(Integer eventID) {
        Optional<Event> event = eventDAO.findById(eventID);
        return event.orElse(null);
    }

    @Override
    public Event create(Event event) {
        return eventDAO.save(event);
    }

    @Override
    public Event update(Integer eventID, Event event) {
        return eventDAO.save(event);
    }

    @Override
    public boolean delete(Integer eventID) {
    Event event = findById(eventID) ;
        if(event != null){
            event.setDelflag(false);
            eventDAO.save(event);
        }
        return false;
    }
    public boolean isEventNameUnique(String eventName) {
        return eventDAO.findByEventNameIgnoreCase(eventName).isEmpty();
    }
}
