package com.trade.autioneaseproject.controller;

import com.trade.autioneaseproject.dao.AuctionItemDAO;
import com.trade.autioneaseproject.entity.AuctionItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class indexController {


    @GetMapping("/index")
    public String listAll(Model model) {
        return "index";
    }
}
