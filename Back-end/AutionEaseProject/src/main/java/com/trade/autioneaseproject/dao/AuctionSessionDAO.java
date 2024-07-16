package com.trade.autioneaseproject.dao;

import com.trade.autioneaseproject.entity.AuctionSession;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuctionSessionDAO extends JpaRepository<AuctionSession, Integer> {

}
