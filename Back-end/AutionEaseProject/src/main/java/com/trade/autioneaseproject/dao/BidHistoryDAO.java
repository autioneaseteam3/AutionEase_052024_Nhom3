package com.trade.autioneaseproject.dao;

import com.trade.autioneaseproject.entity.Account;
import com.trade.autioneaseproject.entity.AuctionSession;
import com.trade.autioneaseproject.entity.BidHistory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BidHistoryDAO extends JpaRepository<BidHistory, Integer> {
    BidHistory findByAccount(Account acc);
}
