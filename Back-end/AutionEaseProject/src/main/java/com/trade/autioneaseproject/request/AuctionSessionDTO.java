package com.trade.autioneaseproject.request;

import com.trade.autioneaseproject.entity.Event;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AuctionSessionDTO {
    private Integer auctionSessionID;
    private Date startTime;
    private Date endTime;
    private Integer eventID;
    private boolean delflag;
}
