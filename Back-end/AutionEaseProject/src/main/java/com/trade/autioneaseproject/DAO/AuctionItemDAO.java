package com.trade.autioneaseproject.dao;

import com.trade.autioneaseproject.entity.AuctionItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AuctionItemDAO extends JpaRepository<AuctionItem, Integer> {
    @Query("select a from AuctionItem a where a.delflag = false")
    List<AuctionItem> getAll();

    @Query("select a from AuctionItem a where a.auctionItemID = :id and a.delflag = false")
    Optional<AuctionItem> findAuctionItemById(Integer id);
}
