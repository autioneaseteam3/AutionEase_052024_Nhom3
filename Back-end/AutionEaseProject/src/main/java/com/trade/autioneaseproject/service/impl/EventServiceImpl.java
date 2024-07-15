package com.trade.autioneaseproject.service.impl;

import com.trade.autioneaseproject.dao.EventDAO;
import com.trade.autioneaseproject.entity.Event;
import com.trade.autioneaseproject.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EventServiceImpl implements EventService {

    @Autowired
    EventDAO eventDAO;


    @Override
    public List<Event> findAll() {
        return eventDAO.findAll();
    }

    @Override
    public Event findById(Integer eventID) {
        return eventDAO.findAllByEventID(eventID);
    }

    @Override
    public Event create(Event event) {
        return eventDAO.save(event);
    }

    @Override
    public Event update(Event event) {
        return eventDAO.save(event);
    }

    @Override
    public void delete(Integer eventID) {
    Event event = findById(eventID) ;
        if(event != null){
            event.setDelflag(false);
            eventDAO.save(event);
        }
    }
}
