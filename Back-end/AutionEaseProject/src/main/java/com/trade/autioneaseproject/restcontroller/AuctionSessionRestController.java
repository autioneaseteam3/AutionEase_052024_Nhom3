package com.trade.autioneaseproject.restcontroller;

import com.trade.autioneaseproject.entity.AuctionSession;
import com.trade.autioneaseproject.request.ApiResponse;
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
    public ApiResponse<List<AuctionSession>> getAll(){
        ApiResponse<List<AuctionSession>> apiResponse = new ApiResponse<>();

        List<AuctionSession> auctionSessionList = auctionSessionService.getAll();

        if (auctionSessionList != null){
            apiResponse.setStatus(HttpStatus.OK.value());
            apiResponse.setMessage("Get all auction session success");
            apiResponse.setData(auctionSessionList);
        } else {
            apiResponse.setStatus(HttpStatus.BAD_REQUEST.value());
            apiResponse.setMessage("Get all auction session failed");
            apiResponse.setData(null);
        }
        return apiResponse;
    }

    @GetMapping("/get-one/{id}")
    public ApiResponse<AuctionSession> getOne(@PathVariable("id") Integer id){
        ApiResponse<AuctionSession> apiResponse = new ApiResponse<>();

        AuctionSession auctionSession = auctionSessionService.getOne(id);

        if (auctionSession != null){
            apiResponse.setStatus(HttpStatus.OK.value());
            apiResponse.setMessage("Get auction session success");
            apiResponse.setData(auctionSession);
        } else {
            apiResponse.setStatus(HttpStatus.BAD_REQUEST.value());
            apiResponse.setMessage("Get auction session failed");
            apiResponse.setData(null);
        }
        return apiResponse;
    }

    @PostMapping("/create")
    public ApiResponse<AuctionSession> create(@RequestBody AuctionSession request){
        ApiResponse<AuctionSession> apiResponse = new ApiResponse<>();

        AuctionSession auctionSession = auctionSessionService.create(request);

        if (auctionSession != null){
            apiResponse.setStatus(HttpStatus.OK.value());
            apiResponse.setMessage("Create auction session success");
            apiResponse.setData(auctionSession);
        } else {
            apiResponse.setStatus(HttpStatus.BAD_REQUEST.value());
            apiResponse.setMessage("Create auction session failed");
            apiResponse.setData(null);
        }
        return apiResponse;
    }

    @PutMapping("/update/{id}")
    public ApiResponse<AuctionSession> update(@PathVariable("id") Integer id, @RequestBody AuctionSession request){
        ApiResponse<AuctionSession> apiResponse = new ApiResponse<>();

        AuctionSession auctionSession = auctionSessionService.update(id, request);

        if (auctionSession != null){
            apiResponse.setStatus(HttpStatus.OK.value());
            apiResponse.setMessage("Update auction session success");
            apiResponse.setData(auctionSession);
        } else {
            apiResponse.setStatus(HttpStatus.BAD_REQUEST.value());
            apiResponse.setMessage("Update auction session failed");
            apiResponse.setData(null);
        }
        return apiResponse;
    }

    @DeleteMapping("/delete/{id}")
    public ApiResponse<Boolean> delete(@PathVariable("id") Integer id){
        ApiResponse<Boolean> apiResponse = new ApiResponse<>();

        boolean isDeleted = auctionSessionService.delete(id);

        if (isDeleted){
            apiResponse.setStatus(HttpStatus.OK.value());
            apiResponse.setMessage("Delete auction session success");
            apiResponse.setData(null);
        } else {
            apiResponse.setStatus(HttpStatus.BAD_REQUEST.value());
            apiResponse.setMessage("Delete auction session failed");
            apiResponse.setData(null);
        }
        return apiResponse;
    }
}
