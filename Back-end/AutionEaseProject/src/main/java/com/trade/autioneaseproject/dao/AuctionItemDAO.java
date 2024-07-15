package com.trade.autioneaseproject.DAO;

import com.trade.autioneaseproject.entity.AuctionItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AuctionItemDAO extends JpaRepository<AuctionItem, Integer> {
    @Query("select a from AuctionItem a where a.delflag = false")
    List<AuctionItem> getAll();

    @Query("select a from AuctionItem a where a.auctionItemID = :id and a.delflag = false")
    AuctionItem getOne(Integer id);
}
