package com.trade.autioneaseproject.DAO;

import com.trade.autioneaseproject.entity.AuctionSession;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AuctionSessionDAO extends JpaRepository<AuctionSession, Integer> {
    @Query("select a from AuctionSession a where a.delflag = false")
    List<AuctionSession> getAll();

    @Query("select a from AuctionSession a where a.auctionSessionID = :id and a.delflag = false")
    Optional<AuctionSession> findAuctionSessionByIy(Integer id);
}
