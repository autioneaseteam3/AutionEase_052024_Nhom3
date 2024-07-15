package com.trade.autioneaseproject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class indexController {


    @GetMapping("/index")
    public String listAll(Model model) {
        return "index";
    }

    @RequestMapping("/event")
    public String event(){
        return "/event";
    }
}
