package com.trade.autioneaseproject.exception;

import com.trade.autioneaseproject.request.ApiResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.resource.NoResourceFoundException;

@ControllerAdvice
public class GlobalExceptionHandler {

    //Handle for RuntimeException
    @ExceptionHandler(value = RuntimeException.class)
    ResponseEntity<ApiResponse<?>> handlingRuntimeException(RuntimeException exception){
        ApiResponse<?> apiResponse = new ApiResponse<>();

        //set api
        apiResponse.setStatus(HttpStatus.BAD_REQUEST.value());
        apiResponse.setMessage(exception.getMessage());

        return ResponseEntity.badRequest().body(apiResponse);
    }

    //Handle for NoResourceFoundException
    @ExceptionHandler(value = NoResourceFoundException.class)
    ResponseEntity<ApiResponse<?>> handlingNoResourceFoundException(NoResourceFoundException exception){
        ApiResponse<?> apiResponse = new ApiResponse<>();

        //set api
        apiResponse.setStatus(HttpStatus.BAD_REQUEST.value());
        apiResponse.setMessage(exception.getMessage());

        return ResponseEntity.badRequest().body(apiResponse);
    }
}
