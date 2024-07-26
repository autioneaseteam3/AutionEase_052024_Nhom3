package com.trade.autioneaseproject.service.impl;

import com.trade.autioneaseproject.dao.TaxDAO;
import com.trade.autioneaseproject.entity.Tax;
import com.trade.autioneaseproject.service.TaxService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaxServiceImpl implements TaxService {
    @Autowired
    TaxDAO taxDAO;



    @Override
    public List<Tax> findAll() {
        return taxDAO.findAll();
    }

    @Override
    public Tax findById(Integer taxID) {
        return taxDAO.findAllByTaxID(taxID);
    }

    @Override
    public Tax create(Tax tax) {
        return taxDAO.save(tax);
    }

    @Override
    public Tax update(Tax tax) {
        return taxDAO.save(tax);
    }

    @Override
    public void delete(Integer taxID) {
        Tax tax = findById(taxID) ;
        if(tax != null){
            tax.setDelflag(false);
            taxDAO.save(tax);
        }
    }
}
