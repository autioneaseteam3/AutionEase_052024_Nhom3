package com.trade.autioneaseproject.service;

import com.trade.autioneaseproject.entity.AuctionSession;
import com.trade.autioneaseproject.request.AuctionSessionDTO;

import java.util.List;

public interface AuctionSessionService {
    List<AuctionSessionDTO> getAll();
    AuctionSessionDTO getOne(Integer id);
    AuctionSessionDTO create(AuctionSessionDTO auctionSession);
    AuctionSessionDTO update(Integer id, AuctionSessionDTO auctionSession);
    boolean delete(Integer id);
}
