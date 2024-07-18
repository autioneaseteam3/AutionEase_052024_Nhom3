package com.trade.autioneaseproject.service.impl;

import com.trade.autioneaseproject.dao.AuctionItemDAO;
import com.trade.autioneaseproject.entity.Asset;
import com.trade.autioneaseproject.entity.AuctionItem;
import com.trade.autioneaseproject.entity.AuctionSession;
import com.trade.autioneaseproject.request.AuctionItemDTO;
import com.trade.autioneaseproject.service.AuctionItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AuctionItemServiceImpl implements AuctionItemService {
    @Autowired
    private AuctionItemDAO auctionItemDAO;
    @Override
    public List<AuctionItemDTO> getAll() {
        List<AuctionItem> auctionItems = auctionItemDAO.getAll();
        List<AuctionItemDTO> auctionItemDTOs = new ArrayList<>();

        for (AuctionItem auctionItem : auctionItems){
            AuctionItemDTO dto = new AuctionItemDTO();
            dto.setAuctionItemID(auctionItem.getAuctionItemID());
            dto.setAuctionSessionID(auctionItem.getAuctionSession().getAuctionSessionID());
            dto.setAssetID(auctionItem.getAsset().getAssetID());
            dto.setStartingBids(auctionItem.getStartingBids());
            dto.setBidIncrement(auctionItem.getBidIncrement());
            dto.setDelflag(auctionItem.isDelflag());
            auctionItemDTOs.add(dto);
        }
        return auctionItemDTOs;
    }

    @Override
    public AuctionItemDTO getOne(Integer id) {
        AuctionItem auctionItem = auctionItemDAO.findAuctionItemById(id)
                .orElseThrow(() -> new RuntimeException("Auction item not found")); //Return exception if not found

        AuctionItemDTO dto = new AuctionItemDTO();
        dto.setAuctionItemID(auctionItem.getAuctionItemID());
        dto.setAuctionSessionID(auctionItem.getAuctionSession().getAuctionSessionID());
        dto.setAssetID(auctionItem.getAsset().getAssetID());
        dto.setStartingBids(auctionItem.getStartingBids());
        dto.setBidIncrement(auctionItem.getBidIncrement());
        dto.setDelflag(auctionItem.isDelflag());

        return dto;
    }

    @Override
    public AuctionItemDTO create(AuctionItemDTO dto) {

        //set data for AuctionItem from AuctionItemRequest
        AuctionItem auctionItem = new AuctionItem();
        auctionItem.setAuctionSession(new AuctionSession());
        auctionItem.getAuctionSession().setAuctionSessionID(dto.getAuctionSessionID());

        auctionItem.setAsset(new Asset());
        auctionItem.getAsset().setAssetID(dto.getAssetID());

        auctionItem.setStartingBids(dto.getStartingBids());
        auctionItem.setBidIncrement(dto.getBidIncrement());
        auctionItem.setDelflag(dto.getDelflag());

        AuctionItem result = auctionItemDAO.save(auctionItem);

        dto.setAuctionItemID(result.getAuctionItemID());

        return dto;
    }

    @Override
    public AuctionItemDTO update(Integer id, AuctionItemDTO dto) {
        AuctionItem auctionItem = auctionItemDAO.findAuctionItemById(id)
                .orElseThrow(() -> new RuntimeException("Auction item not found")); //Return exception if not found

        //set data for AuctionItem from AuctionItemRequest
        auctionItem.setAuctionSession(new AuctionSession());
        auctionItem.getAuctionSession().setAuctionSessionID(dto.getAuctionSessionID());

        auctionItem.setAsset(new Asset());
        auctionItem.getAsset().setAssetID(dto.getAssetID());

        auctionItem.setStartingBids(dto.getStartingBids());
        auctionItem.setBidIncrement(dto.getBidIncrement());
        auctionItem.setDelflag(dto.getDelflag());

        AuctionItem result = auctionItemDAO.save(auctionItem);

        dto.setAuctionItemID(result.getAuctionItemID());

        return dto;
    }

    @Override
    public boolean delete(Integer id) {
        AuctionItem auctionItem = auctionItemDAO.findAuctionItemById(id)
                .orElseThrow(() -> new RuntimeException("Auction item not found")); //Return exception if not found
        auctionItem.setDelflag(false); //update delflag is false
        auctionItemDAO.save(auctionItem);
        return true;
    }
}
