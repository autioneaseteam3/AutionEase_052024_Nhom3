package com.trade.autioneaseproject.service;

import com.trade.autioneaseproject.entity.AuctionItem;
import com.trade.autioneaseproject.request.AuctionItemDTO;

import java.util.List;

public interface AuctionItemService {
    List<AuctionItemDTO> getAll();
    AuctionItemDTO getOne(Integer id);
    AuctionItemDTO create(AuctionItemDTO auctionItem);
    AuctionItemDTO update(Integer id, AuctionItemDTO request);
    boolean delete(Integer id);
}
