package com.trade.autioneaseproject.service.impl;

import com.trade.autioneaseproject.DAO.AuctionSessionDAO;
import com.trade.autioneaseproject.entity.AuctionSession;
import com.trade.autioneaseproject.service.AuctionSessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuctionSessionImpl implements AuctionSessionService {
    @Autowired
    private AuctionSessionDAO auctionSessionDAO;
    @Override
    public List<AuctionSession> getAll() {
        return auctionSessionDAO.getAll();
    }

    @Override
    public AuctionSession getOne(Integer id) {
        return auctionSessionDAO.getOne(id);
    }

    @Override
    public AuctionSession create(AuctionSession auctionSession) {
        return auctionSessionDAO.save(auctionSession);
    }

    @Override
    public AuctionSession update(Integer id, AuctionSession auctionSession) {
        AuctionSession existingAuctionSession = auctionSessionDAO.getOne(id);

        existingAuctionSession.setStartTime(auctionSession.getStartTime());
        existingAuctionSession.setEndTime(auctionSession.getEndTime());
        existingAuctionSession.setDelflag(auctionSession.getDelflag());

        return auctionSessionDAO.save(existingAuctionSession);
    }

    @Override
    public boolean delete(Integer id) {
        try {
            AuctionSession auctionSession = auctionSessionDAO.getOne(id);
            auctionSession.setDelflag(true);
            auctionSessionDAO.save(auctionSession);
            return true;
        } catch (Exception e){
            e.printStackTrace();
        }
        return false;
    }
}
