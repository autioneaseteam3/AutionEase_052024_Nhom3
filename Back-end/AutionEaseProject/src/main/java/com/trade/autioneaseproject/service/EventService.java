package com.trade.autioneaseproject.service;

import com.trade.autioneaseproject.entity.Event;

import java.util.List;
import java.util.Optional;

public interface EventService {

    List<Event> findAll();

    Event findById(Integer eventID);


    Event create(Event event);

    Event update(Integer eventID, Event event);

    boolean delete(Integer eventID);


    boolean isEventNameUnique(String eventName);

}
