package com.trade.autioneaseproject.restcontroller;

import com.trade.autioneaseproject.dao.AuctionItemDAO;
import com.trade.autioneaseproject.entity.AuctionItem;
import com.trade.autioneaseproject.service.AuctionItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/rest/auctionitem")
public class AuctionItemRestController {

    @Autowired
    AuctionItemService aiDAO;

    @GetMapping
    public List<AuctionItem> fillAll(){
        return aiDAO.findAll();
    }
}
