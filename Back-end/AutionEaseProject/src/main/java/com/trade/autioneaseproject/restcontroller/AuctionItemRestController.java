package com.trade.autioneaseproject.restcontroller;

import com.trade.autioneaseproject.entity.AuctionItem;
import com.trade.autioneaseproject.request.ApiResponse;
import com.trade.autioneaseproject.request.AuctionItemDTO;
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
    public ApiResponse<List<AuctionItemDTO>> getAll(){
        ApiResponse<List<AuctionItemDTO>> apiResponse= new ApiResponse<>();

        List<AuctionItemDTO> auctionItems = auctionItemService.getAll();

        apiResponse.setStatus(HttpStatus.OK.value());
        apiResponse.setMessage("Get all auction item success");
        apiResponse.setData(auctionItems);

        return apiResponse;
    }

    @GetMapping("/get-one/{id}")
    public ApiResponse<AuctionItemDTO> getOne(@PathVariable("id") Integer id){
        ApiResponse<AuctionItemDTO> apiResponse = new ApiResponse<>();

        AuctionItemDTO auctionItem = auctionItemService.getOne(id);

        //set api
        apiResponse.setStatus(HttpStatus.OK.value());
        apiResponse.setMessage("Get auction item success");
        apiResponse.setData(auctionItem);

        return apiResponse;
    }

    @PostMapping("/create")
    public ApiResponse<AuctionItemDTO> create(@RequestBody AuctionItemDTO request){
        ApiResponse<AuctionItemDTO> apiResponse = new ApiResponse<>();

        //create auction item from request body
        AuctionItemDTO auctionItem = auctionItemService.create(request);

        //set api
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
    public ApiResponse<AuctionItemDTO> update(@PathVariable("id") Integer id, @RequestBody AuctionItemDTO request){
        ApiResponse<AuctionItemDTO> apiResponse = new ApiResponse<>();

        //update auction item from request body
        AuctionItemDTO auctionItem = auctionItemService.update(id, request);

        //set api
        apiResponse.setStatus(HttpStatus.OK.value());
        apiResponse.setMessage("Update auction item success");
        apiResponse.setData(auctionItem);

        return apiResponse;
    }

    @DeleteMapping("/delete/{id}")
    public ApiResponse<Boolean> delete(@PathVariable("id") Integer id){
        ApiResponse<Boolean> apiResponse = new ApiResponse<>();

        auctionItemService.delete(id);

        //set api
        apiResponse.setStatus(HttpStatus.OK.value());
        apiResponse.setMessage("Delete auction item success");
        apiResponse.setData(null);

        return apiResponse;
    }
}
