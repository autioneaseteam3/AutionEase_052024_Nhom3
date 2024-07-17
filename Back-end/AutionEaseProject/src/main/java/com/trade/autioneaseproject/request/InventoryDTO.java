package com.trade.autioneaseproject.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class InventoryDTO {
    private Integer inventoryID;
    private Integer quantity;
    private Date entryTime;
    private Date exitTime;
    private Integer warehouseID;
    private Integer assetID;
    private boolean delflag;
}
