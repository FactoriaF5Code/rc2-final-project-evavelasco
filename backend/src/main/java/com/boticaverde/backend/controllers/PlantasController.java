package com.boticaverde.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.boticaverde.backend.services.PlantasService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/api/plantas")

public class PlantasController {
    @Autowired
    private PlantasService plantasService;

    @GetMapping
    public List<PlantasResponse> getAllPlantas() {
        return plantasService.getAllPlantas();
    }
}
