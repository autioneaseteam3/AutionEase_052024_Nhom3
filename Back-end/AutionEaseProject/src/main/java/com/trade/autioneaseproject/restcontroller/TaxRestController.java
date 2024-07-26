package com.trade.autioneaseproject.restcontroller;

import com.trade.autioneaseproject.entity.Tax;
import com.trade.autioneaseproject.service.TaxService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/rest/tax")
public class TaxRestController {


    @Autowired
    TaxService taxService;

    @GetMapping
    public List<Tax> findAll(){
        return taxService.findAll();
    }

    @GetMapping("{taxID}")
    public Tax findOne(@PathVariable("taxID") Integer taxID){
        return taxService.findById(taxID);
    }

    @PostMapping()
    public  Tax create(@RequestBody Tax tax){
        return  taxService.create(tax);
    }

    @PutMapping("{taxID}")
    public Tax update(@PathVariable("taxID") Integer eventID,@RequestBody Tax tax){
        return taxService.update(tax);
    }

    @DeleteMapping("{taxID}")
    public void deleteAccount(@PathVariable("taxID") Integer taxID) {
        taxService.delete(taxID);
    }
}
