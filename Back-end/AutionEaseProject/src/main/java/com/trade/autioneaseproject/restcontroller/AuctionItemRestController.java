package com.trade.autioneaseproject.restcontroller;

import com.trade.autioneaseproject.entity.AuctionItem;
import com.trade.autioneaseproject.request.ApiResponse;
import com.trade.autioneaseproject.request.AuctionItemRequest;
import com.trade.autioneaseproject.service.AuctionItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/auction-item")
public class AuctionItemRestController {
    @Autowired
    private AuctionItemService auctionItemService;
    @GetMapping("/get-all")
    public ApiResponse<List<AuctionItem>> getAll(){
        ApiResponse<List<AuctionItem>> apiResponse= new ApiResponse<>();

        List<AuctionItem> auctionItems = auctionItemService.getAll();

        if (auctionItems != null){
            apiResponse.setStatus(HttpStatus.OK.value());
            apiResponse.setMessage("Get all auction item success");
            apiResponse.setData(auctionItems);
        } else {
            apiResponse.setStatus(HttpStatus.OK.value());
            apiResponse.setMessage("Get all auction item failed");
            apiResponse.setData(null);
        }
        return apiResponse;
    }

    @GetMapping("/get-one/{id}")
    public ApiResponse<AuctionItem> getOne(@PathVariable("id") Integer id){
        ApiResponse<AuctionItem> apiResponse = new ApiResponse<>();

        AuctionItem auctionItem = auctionItemService.getOne(id);

        if (auctionItem != null){
            apiResponse.setStatus(HttpStatus.OK.value());
            apiResponse.setMessage("Get auction item success");
            apiResponse.setData(auctionItem);
        } else {
            apiResponse.setStatus(HttpStatus.OK.value());
            apiResponse.setMessage("Get auction item failed");
            apiResponse.setData(null);
        }
        return apiResponse;
    }

    @PostMapping("/create")
    public ApiResponse<AuctionItem> create(@RequestBody AuctionItemRequest request){
        ApiResponse<AuctionItem> apiResponse = new ApiResponse<>();

        AuctionItem auctionItem = auctionItemService.create(request);

        if (auctionItem != null){
            apiResponse.setStatus(HttpStatus.OK.value());
            apiResponse.setMessage("Create auction item success");
            apiResponse.setData(auctionItem);
        } else {
            apiResponse.setStatus(HttpStatus.BAD_REQUEST.value());
            apiResponse.setMessage("Create auction item failed");
            apiResponse.setData(null);
        }
        return apiResponse;
    }

    @PutMapping("/update/{id}")
    public ApiResponse<AuctionItem> update(@PathVariable("id") Integer id, @RequestBody AuctionItemRequest request){
        ApiResponse<AuctionItem> apiResponse = new ApiResponse<>();

        AuctionItem auctionItem = auctionItemService.update(id, request);

        if (auctionItem != null){
            apiResponse.setStatus(HttpStatus.OK.value());
            apiResponse.setMessage("Update auction item success");
            apiResponse.setData(auctionItem);
        } else {
            apiResponse.setStatus(HttpStatus.BAD_REQUEST.value());
            apiResponse.setMessage("Update auction item failed");
            apiResponse.setData(null);
        }
        return apiResponse;
    }

    @DeleteMapping("/delete/{id}")
    public ApiResponse<Boolean> delete(@PathVariable("id") Integer id){
        ApiResponse<Boolean> apiResponse = new ApiResponse<>();

        boolean isDeleted = auctionItemService.delete(id);

        if (isDeleted){
            apiResponse.setStatus(HttpStatus.OK.value());
            apiResponse.setMessage("Delete auction item success");
            apiResponse.setData(null);
        } else {
            apiResponse.setStatus(HttpStatus.BAD_REQUEST.value());
            apiResponse.setMessage("Delete auction item success");
            apiResponse.setData(null);
        }
        return apiResponse;
    }
}
