package com.trade.autioneaseproject.restcontroller;

import com.trade.autioneaseproject.entity.AuctionSession;
import com.trade.autioneaseproject.request.ApiResponse;
import com.trade.autioneaseproject.request.AuctionSessionDTO;
import com.trade.autioneaseproject.service.AuctionSessionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/auction-session")
public class AuctionSessionRestController {
    @Autowired
    private AuctionSessionService auctionSessionService;
    @GetMapping("/get-all")
    public ApiResponse<List<AuctionSessionDTO>> getAll(){
        ApiResponse<List<AuctionSessionDTO>> apiResponse = new ApiResponse<>();

        List<AuctionSessionDTO> auctionSessionList = auctionSessionService.getAll();

        //set api
        apiResponse.setStatus(HttpStatus.OK.value());
        apiResponse.setMessage("Get all auction session success");
        apiResponse.setData(auctionSessionList);

        return apiResponse;
    }

    @GetMapping("/get-one/{id}")
    public ApiResponse<AuctionSessionDTO> getOne(@PathVariable("id") Integer id){
        ApiResponse<AuctionSessionDTO> apiResponse = new ApiResponse<>();

        AuctionSessionDTO auctionSession = auctionSessionService.getOne(id);

        //set api
        apiResponse.setStatus(HttpStatus.OK.value());
        apiResponse.setMessage("Get auction session success");
        apiResponse.setData(auctionSession);

        return apiResponse;
    }

    @PostMapping("/create")
    public ApiResponse<AuctionSessionDTO> create(@RequestBody AuctionSessionDTO request){
        ApiResponse<AuctionSessionDTO> apiResponse = new ApiResponse<>();

        //create auction session from request body
        AuctionSessionDTO auctionSession = auctionSessionService.create(request);

        //set api
        apiResponse.setStatus(HttpStatus.OK.value());
        apiResponse.setMessage("Create auction session success");
        apiResponse.setData(auctionSession);

        return apiResponse;
    }

    @PutMapping("/update/{id}")
    public ApiResponse<AuctionSessionDTO> update(@PathVariable("id") Integer id, @RequestBody AuctionSessionDTO request){
        ApiResponse<AuctionSessionDTO> apiResponse = new ApiResponse<>();

        //update auction item from request body
        AuctionSessionDTO auctionSession = auctionSessionService.update(id, request);

        //set api
        apiResponse.setStatus(HttpStatus.OK.value());
        apiResponse.setMessage("Update auction session success");
        apiResponse.setData(auctionSession);

        return apiResponse;
    }

    @DeleteMapping("/delete/{id}")
    public ApiResponse<Boolean> delete(@PathVariable("id") Integer id){
        ApiResponse<Boolean> apiResponse = new ApiResponse<>();

        auctionSessionService.delete(id);

        //set api
        apiResponse.setStatus(HttpStatus.OK.value());
        apiResponse.setMessage("Delete auction session success");
        apiResponse.setData(null);

        return apiResponse;
    }
}
