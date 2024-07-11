package com.trade.autioneaseproject.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Taxs")
public class Tax {
    @Id
    private Integer taxID;
    private String taxName;
    private Float taxAmount;
    private Boolean delflag;
}
