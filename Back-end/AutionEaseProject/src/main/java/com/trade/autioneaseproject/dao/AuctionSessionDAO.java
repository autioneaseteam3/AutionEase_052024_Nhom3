package com.trade.autioneaseproject.dao;

import com.trade.autioneaseproject.entity.AuctionSession;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface AuctionSessionDAO extends JpaRepository<AuctionSession, Integer> {

    //Retrieve only non-deleted data
    @Query("SELECT a FROM AuctionSession a WHERE a.delflag = true")
    List<AuctionSession> getAll();

    @Query("SELECT a FROM AuctionSession a WHERE a.auctionSessionID = :id AND a.delflag = true")
    Optional<AuctionSession> findAuctionSessionById(Integer id);
}
