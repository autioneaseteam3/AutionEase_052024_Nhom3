package com.trade.autioneaseproject.service;

import com.trade.autioneaseproject.entity.Tax;

import java.util.List;

public interface TaxService {

    List<Tax> findAll();

    Tax findById(Integer taxID);


    Tax create(Tax tax);

    Tax update(Tax tax);

    void delete(Integer taxID);
}
