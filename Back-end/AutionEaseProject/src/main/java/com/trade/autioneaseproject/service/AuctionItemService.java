package com.trade.autioneaseproject.service;

import com.trade.autioneaseproject.entity.AuctionItem;
import com.trade.autioneaseproject.request.AuctionItemRequest;

import java.util.List;

public interface AuctionItemService {
    List<AuctionItem> getAll();
    AuctionItem getOne(Integer id);
    AuctionItem create(AuctionItemRequest request);
    AuctionItem update(Integer id, AuctionItemRequest request);
    boolean delete(Integer id);
}
