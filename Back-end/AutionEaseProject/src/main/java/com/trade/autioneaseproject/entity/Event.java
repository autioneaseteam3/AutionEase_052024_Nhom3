package com.trade.autioneaseproject.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
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

    @NotBlank(message = "Event name is required")
    @Size(max = 255, message = "Event name must be less than 255 characters")
    private String eventName;

    @NotNull(message = "Start time is required")
    private Date startTime;

    @NotNull(message = "End time is required")
    private Date  endTime;

    @NotBlank(message = "State is required")
    private String state;

    private String description;

    private Boolean delflag;
}
