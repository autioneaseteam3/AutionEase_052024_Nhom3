package com.trade.autioneaseproject.service;

import com.trade.autioneaseproject.entity.Event;

import java.util.List;

public interface EventService {
    List<Event> findAll();

    Event findById(Integer eventID);


    Event create(Event event);

    Event update(Event event);

    void delete(Integer eventID);
}
