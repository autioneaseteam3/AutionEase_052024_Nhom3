package com.trade.autioneaseproject.dao;

import com.trade.autioneaseproject.entity.AuctionItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface AuctionItemDAO extends JpaRepository<AuctionItem, Integer> {

    //Retrieve only non-deleted data
    @Query("SELECT a FROM AuctionItem a WHERE a.delflag = false")
    List<AuctionItem> getAll();

    @Query("SELECT a FROM AuctionItem a WHERE a.auctionItemID = :id AND a.delflag = false")
    Optional<AuctionItem> findAuctionItemById(Integer id);
}
