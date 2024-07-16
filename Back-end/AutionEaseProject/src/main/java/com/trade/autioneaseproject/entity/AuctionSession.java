package com.trade.autioneaseproject.entity;

import jakarta.persistence.*;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer auctionSessionID;
    private Date startTime;
    private Date endTime;

    @ManyToOne
    @JoinColumn(name = "eventID")
    private Event event;

    private Boolean delflag;
}
