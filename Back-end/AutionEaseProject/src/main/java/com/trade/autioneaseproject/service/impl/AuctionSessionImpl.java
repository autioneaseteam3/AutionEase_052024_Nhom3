package com.trade.autioneaseproject.service.impl;

import com.trade.autioneaseproject.dao.AuctionSessionDAO;
import com.trade.autioneaseproject.entity.AuctionSession;
import com.trade.autioneaseproject.service.AuctionSessionService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuctionSessionImpl implements AuctionSessionService {
    @Autowired
    private AuctionSessionDAO auctionSessionDAO;
    @Override
    public List<AuctionSession> getAll() {
        return auctionSessionDAO.findAll();
    }

    @Override
    public AuctionSession getOne(Integer id) {
        return auctionSessionDAO.findAuctionSessionById(id)
                .orElseThrow(() -> new RuntimeException("Auction session not found")); //Return exception if not found
    }

    @Override
    public AuctionSession create(AuctionSession auctionSession) {
        return auctionSessionDAO.save(auctionSession);
    }

    @Override
    public AuctionSession update(Integer id, AuctionSession auctionSession) {
        AuctionSession existingAuctionSession = auctionSessionDAO.findAuctionSessionById(id)
                .orElseThrow(() -> new RuntimeException("Auction session not found")); //Return exception if not found

        //set data for AuctionSession
        existingAuctionSession.setStartTime(auctionSession.getStartTime());
        existingAuctionSession.setEndTime(auctionSession.getEndTime());
        existingAuctionSession.setDelflag(auctionSession.getDelflag());

        return auctionSessionDAO.save(existingAuctionSession);
    }

    @Override
    public boolean delete(Integer id) {
        AuctionSession auctionSession = auctionSessionDAO.findAuctionSessionById(id)
                .orElseThrow(() -> new RuntimeException("Auction session not found")); //Return exception if not found

        auctionSession.setDelflag(true); //update delflag is true
        auctionSessionDAO.save(auctionSession);
        return true;
    }
}
