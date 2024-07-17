package com.trade.autioneaseproject.dao;

import com.trade.autioneaseproject.entity.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventDAO extends JpaRepository<Event, Integer> {
    Event findAllByEventID(Integer eventID);
}
