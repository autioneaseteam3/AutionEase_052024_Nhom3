package com.trade.autioneaseproject.dao;

import com.trade.autioneaseproject.entity.AuctionItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
public interface AuctionItemDAO extends JpaRepository<AuctionItem, Integer> {

}
