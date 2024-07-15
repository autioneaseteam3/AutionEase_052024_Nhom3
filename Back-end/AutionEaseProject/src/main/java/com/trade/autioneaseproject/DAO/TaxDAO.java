package com.trade.autioneaseproject.dao;

import com.trade.autioneaseproject.entity.Tax;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaxDAO extends JpaRepository<Tax, Integer> {
      Tax findAllByTaxID(Integer taxID);
}
