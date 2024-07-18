package com.trade.autioneaseproject.dao;

import com.trade.autioneaseproject.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EventDAO extends JpaRepository<Event, Integer> {
    Event findAllByEventID(Integer eventID);
    Optional<Event> findByEventName(String eventName);
    Optional<Event> findByEventNameIgnoreCase(String eventName);

}
