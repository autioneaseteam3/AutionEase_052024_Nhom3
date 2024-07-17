package com.trade.autioneaseproject.service.impl;

import com.trade.autioneaseproject.dao.AuctionSessionDAO;
import com.trade.autioneaseproject.entity.AuctionSession;
import com.trade.autioneaseproject.entity.Event;
import com.trade.autioneaseproject.request.AuctionSessionDTO;
import com.trade.autioneaseproject.service.AuctionSessionService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@Service
public class AuctionSessionImpl implements AuctionSessionService {

    @Autowired
    private AuctionSessionDAO auctionSessionDAO;
    @Override
    public List<AuctionSessionDTO> getAll() {
        List<AuctionSession> auctionSessions = auctionSessionDAO.getAll();
        List<AuctionSessionDTO> auctionSessionDTOs = new ArrayList<>();

        for (AuctionSession auctionSession : auctionSessions) {
            AuctionSessionDTO dto = new AuctionSessionDTO();
            dto.setAuctionSessionID(auctionSession.getAuctionSessionID());
            dto.setStartTime(auctionSession.getStartTime());
            dto.setEndTime(auctionSession.getEndTime());
            dto.setEventID(auctionSession.getEvent().getEventID());
            dto.setDelflag(auctionSession.getDelflag());
            auctionSessionDTOs.add(dto);
        }
        return auctionSessionDTOs;
    }

    @Override
    public AuctionSessionDTO getOne(Integer id) {
        AuctionSession auctionSession = auctionSessionDAO.findAuctionSessionById(id)
                .orElseThrow(() -> new RuntimeException("Auction session not found")); //Return exception if not found

        AuctionSessionDTO dto = new AuctionSessionDTO();
        dto.setAuctionSessionID(auctionSession.getAuctionSessionID());
        dto.setStartTime(auctionSession.getStartTime());
        dto.setEndTime(auctionSession.getEndTime());
        dto.setEventID(auctionSession.getEvent().getEventID());
        dto.setDelflag(auctionSession.getDelflag());

        return dto;
    }

    @Override
    public AuctionSessionDTO create(AuctionSessionDTO dto) {
        AuctionSession auctionSession = new AuctionSession();

        // Set data for AuctionSession from AuctionSessionDTO
        auctionSession.setStartTime(dto.getStartTime());
        auctionSession.setEndTime(dto.getEndTime());

        auctionSession.setEvent(new Event());
        auctionSession.getEvent().setEventID(dto.getEventID());

        auctionSession.setDelflag(dto.isDelflag());

        // Save to database
        AuctionSession result = auctionSessionDAO.save(auctionSession);

        // Set the generated ID back to DTO
        dto.setAuctionSessionID(result.getAuctionSessionID());

        return dto;
    }

    @Override
    public AuctionSessionDTO update(Integer id, AuctionSessionDTO dto) {
        AuctionSession auctionSession = auctionSessionDAO.findAuctionSessionById(id)
                .orElseThrow(() -> new RuntimeException("Auction session not found")); //Return exception if not found

        // Set data for AuctionSession from AuctionSessionDTO
        auctionSession.setStartTime(dto.getStartTime());
        auctionSession.setEndTime(dto.getEndTime());

        Event event = new Event();
        auctionSession.getEvent().setEventID(dto.getEventID());

        auctionSession.setDelflag(dto.isDelflag());

        // Save to database
        AuctionSession result = auctionSessionDAO.save(auctionSession);

        // Set the generated ID back to DTO
        dto.setAuctionSessionID(result.getAuctionSessionID());

        return dto;
    }

    @Override
    public boolean delete(Integer id) {
        AuctionSession auctionSession = auctionSessionDAO.findAuctionSessionById(id)
                .orElseThrow(() -> new RuntimeException("Auction session not found")); //Return exception if not found
        auctionSession.setDelflag(false);
        auctionSessionDAO.save(auctionSession);
        return true;
    }
}
