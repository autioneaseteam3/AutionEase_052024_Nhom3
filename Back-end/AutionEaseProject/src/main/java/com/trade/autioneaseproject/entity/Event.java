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
@Table(name = "Envents")
public class Event {
    @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer eventID;
    private String eventName;
    private Date startTime;
    private Date endTime;
    private String state;
    private String description;
    private Boolean delflag;

}
