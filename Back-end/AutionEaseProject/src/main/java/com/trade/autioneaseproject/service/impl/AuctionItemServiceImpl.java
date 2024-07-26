package com.trade.autioneaseproject.service.impl;

import com.trade.autioneaseproject.DAO.AuctionItemDAO;
import com.trade.autioneaseproject.entity.Asset;
import com.trade.autioneaseproject.entity.AuctionItem;
import com.trade.autioneaseproject.entity.AuctionSession;
import com.trade.autioneaseproject.request.AuctionItemRequest;
import com.trade.autioneaseproject.service.AuctionItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuctionItemServiceImpl implements AuctionItemService {
    @Autowired
    private AuctionItemDAO auctionItemDAO;
    @Override
    public List<AuctionItem> getAll() {
        return auctionItemDAO.getAll();
    }

    @Override
    public AuctionItem getOne(Integer id) {
        return auctionItemDAO.findAuctionItemById(id)
                .orElseThrow(() -> new RuntimeException("Auction item not found"));
    }

    @Override
    public AuctionItem create(AuctionItemRequest request) {

        AuctionItem auctionItem = new AuctionItem();
        auctionItem.setAuctionSession(new AuctionSession());
        auctionItem.getAuctionSession().setAuctionSessionID(request.getAuctionSessionID());

        auctionItem.setAsset(new Asset());
        auctionItem.getAsset().setAssetID(request.getAssetID());

        auctionItem.setStartingBids(request.getStartingBids());
        auctionItem.setBidIncrement(request.getBidIncrement());
        auctionItem.setDelflag(request.getDelflag());

        return auctionItemDAO.save(auctionItem);
    }

    @Override
    public AuctionItem update(Integer id, AuctionItemRequest request) {
        AuctionItem auctionItem = auctionItemDAO.findAuctionItemById(id)
                .orElseThrow(() -> new RuntimeException("Auction item not found"));

        auctionItem.setAuctionSession(new AuctionSession());
        auctionItem.getAuctionSession().setAuctionSessionID(request.getAuctionSessionID());

        auctionItem.setAsset(new Asset());
        auctionItem.getAsset().setAssetID(request.getAssetID());

        auctionItem.setStartingBids(request.getStartingBids());
        auctionItem.setBidIncrement(request.getBidIncrement());
        auctionItem.setDelflag(request.getDelflag());

        return auctionItemDAO.save(auctionItem);
    }

    @Override
    public boolean delete(Integer id) {
        AuctionItem auctionItem = auctionItemDAO.findAuctionItemById(id)
                .orElseThrow(() -> new RuntimeException("Auction item not found"));
        auctionItem.setDelflag(true);
        auctionItemDAO.save(auctionItem);
        return true;
    }
}
