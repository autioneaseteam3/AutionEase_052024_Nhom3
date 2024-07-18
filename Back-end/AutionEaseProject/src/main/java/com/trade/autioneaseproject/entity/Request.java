package com.trade.autioneaseproject.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "Requests")
public class Request {
    @Id
    private Integer requestID;
    private String nameRequest;
    private String descriptionRequest;
    private Boolean verified;
    private Boolean requestStatus;

    @ManyToOne
    @JoinColumn(name = "detailInspectorID")
    private DetailInspector detailInspector;

    @ManyToOne
    @JoinColumn(name = "userID")
    private Account account;

    @ManyToOne
    @JoinColumn(name = "assetID")
    private Asset asset;

    private Boolean delflag;

}
