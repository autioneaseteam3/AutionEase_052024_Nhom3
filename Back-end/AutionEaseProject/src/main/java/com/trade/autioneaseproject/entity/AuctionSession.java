package com.trade.autioneaseproject.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "AuctionSessions")
public class AuctionSession {
    @Id
    private Integer auctionSessionID;
    private Date startTime;
    private Date endTime;
    private Boolean delflag;
}
