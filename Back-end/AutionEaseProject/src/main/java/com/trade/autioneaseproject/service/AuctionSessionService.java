package com.trade.autioneaseproject.service;

import com.trade.autioneaseproject.entity.AuctionSession;

import java.util.List;

public interface AuctionSessionService {
    List<AuctionSession> getAll();
    AuctionSession getOne(Integer id);
    AuctionSession create(AuctionSession auctionSession);
    AuctionSession update(Integer id, AuctionSession auctionSession);
    boolean delete(Integer id);
}
