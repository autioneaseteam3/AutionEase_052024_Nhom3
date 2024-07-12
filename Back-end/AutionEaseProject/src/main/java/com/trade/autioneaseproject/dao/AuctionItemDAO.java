package com.trade.autioneaseproject.dao;

import com.trade.autioneaseproject.entity.AuctionItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AuctionItemDAO extends JpaRepository<AuctionItem, Integer> {
}
