package com.trade.autioneaseproject.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "DetailInspectors")
public class DetailInspector {
    @Id
    private Integer detailInspectorID;

    @ManyToOne
    @JoinColumn(name = "inspectorID")
    private Inspector inspector;

    @ManyToOne
    @JoinColumn(name = "userID")
    private Account account;
}
