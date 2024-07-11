package com.trade.autioneaseproject.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "BidHistiries")
public class Bill {
    @Id
    private Integer billID;

    @ManyToOne
    @JoinColumn(name = "userID")
    private Account account;

    private Date billDate;
    private Float totalAmount;
    private Float depositAmount;
    private Float feePercentage;
    private String paymentStatus;


}
